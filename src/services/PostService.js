import API_BASE, { POSTS_ENDPOINT } from './config';

// submitPost: tries to POST to a backend endpoint, falls back to localStorage
export async function submitPost(post) {
  const url = POSTS_ENDPOINT;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`API error ${res.status}: ${text}`);
    }

    // Attempt to parse JSON response; if none, return the original post
    const data = await res.json().catch(() => null);
    return data || post;
  } catch (err) {
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


// Update an existing post by id. Falls back to localStorage when network fails.
export async function updatePost(id, updated) {
  const url = `${POSTS_ENDPOINT.replace(/\/$/, '')}/${encodeURIComponent(id)}`;
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`API error ${res.status}: ${text}`);
    }
    const data = await res.json().catch(() => null);
    return data || updated;
  } catch (err) {
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
export async function deletePost(id) {
  const url = `${POSTS_ENDPOINT.replace(/\/$/, '')}/${encodeURIComponent(id)}`;
  try {
    const res = await fetch(url, { method: 'DELETE' });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`API error ${res.status}: ${text}`);
    }
    return true;
  } catch (err) {
    try {
      const existing = JSON.parse(localStorage.getItem('posts') || '[]');
      const filtered = existing.filter(p => p.id !== id);
      localStorage.setItem('posts', JSON.stringify(filtered));
    } catch (e) {
      console.warn('deletePost fallback failed', e);
    }
    return true;
  }
}

export default { submitPost, updatePost, deletePost };
