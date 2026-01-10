import axios from 'axios';
import API_BASE, { POSTS_ENDPOINT } from './config';

// Get the image URL for a post by ID
export function getPostImageUrl(postId) {
  return `${POSTS_ENDPOINT}/${postId}/image`;
}

// submitPost: creates a post and optionally uploads an image
// Requires userId header for backend authentication
export async function submitPost(post, userId, imageFile = null) {
  try {
    // Step 1: Create the post
    const response = await axios.post(POSTS_ENDPOINT, {
      title: post.title,
      content: post.content,
      community: post.community,
      tags: post.tags || [],
      anonymous: post.anonymous || false
    }, {
      headers: {
        'userId': userId
      }
    });
    
    const createdPost = response.data;
    
    // Step 2: Upload image if provided
    if (imageFile && createdPost.id) {
      try {
        const uploadedPost = await uploadPostImage(createdPost.id, userId, imageFile);
        return uploadedPost;
      } catch (uploadErr) {
        console.error('Image upload failed, returning post without image:', uploadErr);
        return createdPost;
      }
    }
    
    return createdPost;
  } catch (err) {
    console.error('Error creating post:', err.response?.data || err.message);
    // Network or server error — use localStorage as a fallback mock
    try {
      const existing = JSON.parse(localStorage.getItem('posts') || '[]');
      existing.unshift(post);
      localStorage.setItem('posts', JSON.stringify(existing));
    } catch (e) {
      console.warn('submitPost fallback failed', e);
    }
    return post;
  }
}

// uploadPostImage: uploads an image to an existing post
export async function uploadPostImage(postId, userId, imageFile) {
  try {
    const formData = new FormData();
    formData.append('file', imageFile);
    
    const response = await axios.post(
      `${POSTS_ENDPOINT}/${postId}/image`,
      formData,
      {
        headers: {
          'userId': userId,
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    
    return response.data;
  } catch (err) {
    console.error('Error uploading image:', err.response?.data || err.message);
    throw err;
  }
}


// Update an existing post by id. Falls back to localStorage when network fails.
export async function updatePost(id, updated, userId) {
  const url = `${POSTS_ENDPOINT.replace(/\/$/, '')}/${encodeURIComponent(id)}`;
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'userId': userId || 'anonymous-user'
      },
      body: JSON.stringify(updated),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`API error ${res.status}: ${text}`);
    }
    const data = await res.json().catch(() => null);
    return data || updated;
  } catch (err) {
    console.error('Error updating post:', err.message);
    // Fallback: update post in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('posts') || '[]');
      const idx = existing.findIndex(p => p.id === id);
      if (idx !== -1) {
        existing[idx] = { ...existing[idx], ...updated };
        localStorage.setItem('posts', JSON.stringify(existing));
      }
    } catch (e) {
      console.warn('updatePost fallback failed', e);
    }
    return updated;
  }
}

// Delete a post by id. Falls back to localStorage when network fails.
export async function deletePost(id, userId) {
  const url = `${POSTS_ENDPOINT.replace(/\/$/, '')}/${encodeURIComponent(id)}`;
  try {
    const res = await fetch(url, { 
      method: 'DELETE',
      headers: {
        'userId': userId || 'anonymous-user'
      }
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`API error ${res.status}: ${text}`);
    }
    return true;
  } catch (err) {
    console.error('Error deleting post:', err.message);
    try {
      const existing = JSON.parse(localStorage.getItem('posts') || '[]');
      const filtered = existing.filter(p => p.id !== id);
      localStorage.setItem('posts', JSON.stringify(filtered));
    } catch (e) {
      console.warn('deletePost fallback failed', e);
    }
    throw err; // Re-throw so caller knows it failed
  }
}

export default { submitPost, updatePost, deletePost };

// Fetch list of posts. Tries network, falls back to localStorage.
export async function fetchPosts() {
  const url = POSTS_ENDPOINT;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const data = await res.json().catch(() => []);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    try {
      return JSON.parse(localStorage.getItem('posts') || '[]');
    } catch (e) {
      console.warn('fetchPosts fallback failed', e);
      return [];
    }
  }
}

// Fetch single post by id. Tries network, falls back to localStorage.
export async function fetchPost(id) {
  const url = `${POSTS_ENDPOINT.replace(/\/$/, '')}/${encodeURIComponent(id)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const data = await res.json().catch(() => null);
    return data;
  } catch (err) {
    try {
      const existing = JSON.parse(localStorage.getItem('posts') || '[]');
      return existing.find(p => p.id === id) || null;
    } catch (e) {
      console.warn('fetchPost fallback failed', e);
      return null;
    }
  }
}
