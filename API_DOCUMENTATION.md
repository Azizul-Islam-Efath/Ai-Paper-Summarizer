# API Documentation

## Base URL
```
Development: http://localhost:5000/api
Production:  https://your-domain.com/api
```

## Authentication
All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <access_token>
```

Refresh tokens are handled via httpOnly cookies automatically.

---

## Auth Endpoints

### POST /auth/register
Register a new user.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully.",
  "data": {
    "user": { "id": "...", "name": "...", "email": "...", "role": "USER" },
    "accessToken": "eyJ..."
  }
}
```

### POST /auth/login
Login existing user.

**Request:**
```json
{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

### POST /auth/refresh
Refresh access token using httpOnly cookie.

**Response:**
```json
{
  "success": true,
  "data": { "accessToken": "eyJ..." }
}
```

### POST /auth/logout
Logout user and clear refresh token.

### GET /auth/me
Get current user profile.

### POST /auth/forgot-password
Request password reset.

**Request:**
```json
{ "email": "john@example.com" }
```

---

## Papers Endpoints

### POST /papers/upload
Upload PDF file (multipart/form-data).

**Request:**
- Form field: `file` (PDF, max 10MB)
- Optional: `title` (string)

### POST /papers/text
Upload text content.

**Request:**
```json
{
  "title": "Paper Title",
  "text": "Full paper text content..."
}
```

### GET /papers
List user's papers with pagination.

**Query Parameters:**
- `page` (number, default: 1)
- `limit` (number, default: 10, max: 100)
- `search` (string, optional)
- `sort` (string: "asc" | "desc", default: "desc")

**Response:**
```json
{
  "success": true,
  "data": {
    "papers": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 42,
      "totalPages": 5,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### GET /papers/:id
Get single paper with summary.

### DELETE /papers/:id
Delete paper and associated summary.

### PATCH /papers/:id/favorite
Toggle favorite status.

---

## Summaries Endpoints

### POST /summaries/generate
Generate AI summary for a paper.

**Request:**
```json
{ "paperId": "uuid" }
```

**Rate Limit:** 10 per hour per user.

### POST /summaries/regenerate
Regenerate existing summary.

### GET /summaries
List all summaries.

### GET /summaries/:id
Get single summary.

### POST /summaries/:id/share
Create shareable link.

**Response:**
```json
{
  "success": true,
  "data": {
    "shareToken": "uuid",
    "expiresAt": "2024-07-15T..."
  }
}
```

### GET /summaries/share/:token
Access shared summary (public, no auth required).

### DELETE /summaries/:id
Delete summary.

### GET /summaries/:id/export/pdf
Export summary as PDF.

### GET /summaries/:id/export/docx
Export summary as DOCX.

---

## Admin Endpoints

All require `ADMIN` role.

### GET /admin/stats
Get platform statistics.

**Response:**
```json
{
  "success": true,
  "data": {
    "userCount": 150,
    "paperCount": 420,
    "summaryCount": 380
  }
}
```

### GET /admin/users
List all users with pagination.

---

## Projects Endpoints

### POST /projects
Create a new project.

**Request:**
```json
{
  "name": "Project Name",
  "description": "Project Description"
}
```

### GET /projects
List all projects belonging to the authenticated user.

### GET /projects/:id
Get details of a single project.

### PUT /projects/:id
Update project details.

### DELETE /projects/:id
Delete a project and all associated papers.

### GET /projects/:id/stats
Get analytics/statistics for a project.

---

## Comparisons Endpoints

### POST /comparisons/trigger
Trigger cross-paper comparison for a project.

**Request:**
```json
{
  "projectId": "uuid"
}
```

### GET /comparisons/:id
Get comparison result by ID.

### GET /comparisons/project/:projectId
Get latest comparison result for a project.

---

## Research Gaps Endpoints

### POST /research-gaps/trigger
Trigger research gap analysis for a project.

**Request:**
```json
{
  "projectId": "uuid"
}
```

### GET /research-gaps/:id
Get gap analysis result by ID.

### GET /research-gaps/project/:projectId
Get latest gap analysis result for a project.

---

## Generated Papers Endpoints

### POST /generated-papers/generate
Trigger academic paper synthesis draft.

**Request:**
```json
{
  "projectId": "uuid",
  "title": "Draft Title",
  "format": "IEEE",
  "objectives": "Custom user objectives/focus..."
}
```

### GET /generated-papers/:id
Get generated paper by ID.

### GET /generated-papers/project/:projectId
Get all generated papers for a project.

### DELETE /generated-papers/:id
Delete generated paper.

### GET /generated-papers/:id/export/pdf
Export generated paper as PDF file download.

### GET /generated-papers/:id/export/docx
Export generated paper as DOCX file download.

### GET /generated-papers/:id/export/markdown
Export generated paper as Markdown file download.

### GET /generated-papers/:id/export/html
Export generated paper as styled HTML file download.

---

## Error Responses

```json
{
  "success": false,
  "message": "Error description",
  "errors": [ { "field": "email", "message": "Invalid email" } ]
}
```

**Status Codes:**
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 409: Conflict
- 422: Validation Error
- 429: Too Many Requests
- 500: Internal Server Error
- 503: Service Unavailable (AI)
