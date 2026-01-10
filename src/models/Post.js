// Minimal Post model and helpers for the frontend
// Returns a normalized post object suitable for storage or API submission

export function createPost({ title, body, tag = 'Other', anonymous = true, community = 'General' }) {
  const now = new Date();
  return {
    id: `post_${now.getTime()}`,
    title: title.trim(),
    content: body.trim(),
    community,
    tags: tag ? [tag] : [],
    anonymous: !!anonymous,
    createdAt: now.toISOString(),
  };
}

export function validatePost({ title, body }) {
  const errors = {};
  if (!title || !title.trim()) errors.title = 'Title is required';
  else if (title.length > 100) errors.title = 'Title must be under 100 characters';
  if (!body || !body.trim()) errors.body = 'Post content is required';
  else if (body.length < 10) errors.body = 'Content must be at least 10 characters';
  return errors;
}

export default { createPost, validatePost };
