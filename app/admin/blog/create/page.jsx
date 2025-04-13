"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

export default function CreateBlogPage() {
  const [form, setForm] = useState({
    title: "",
    short_description: "",
    content: "",
    img: "",
    tabTitle: "",
    metaDesc: "",
    keywords: "",
  });
  const [status, setStatus] = useState(null);

  // Auth popup
  const [authOpen, setAuthOpen] = useState(false);
  const [authUser, setAuthUser] = useState("");
  const [authPass, setAuthPass] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (!saved) {
      setAuthOpen(true);
    } else {
      checkAuth(JSON.parse(saved));
    }
  }, []);

  const checkAuth = async ({ user, pass }) => {
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${user}:${pass}`),
      },
      body: JSON.stringify({ test: true }), // sending dummy data
    });

    // Since dummy body will cause 400 but not 401
    if (res.status === 401) {
      localStorage.removeItem("auth");
      setAuthOpen(true);
    } else {
      setAuthOpen(false);
    }
    setLoading(false);
  };

  const handleAuthSubmit = () => {
    const creds = { user: authUser, pass: authPass };
    localStorage.setItem("auth", JSON.stringify(creds));
    checkAuth(creds);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("auth"));
    if (!saved) return;

    const keywordsArray = form.keywords
      .split(",")
      .map((kw) => kw.trim())
      .filter(Boolean);

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${saved.user}:${saved.pass}`),
      },
      body: JSON.stringify({ ...form, keywords: keywordsArray }),
    });

    if (res.ok) {
      setStatus("✅ Blog published!");
      setForm({
        title: "",
        short_description: "",
        content: "",
        img: "",
        tabTitle: "",
        metaDesc: "",
        keywords: "",
      });
    } else {
      setStatus("❌ Failed to publish.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <CircularProgress color="info" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">📝 Create Blog Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            value={form.title}
            onChange={handleChange}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#ccc" } }}
            sx={{ bgcolor: "#1e293b", borderRadius: 1 }}
          />
          <TextField
            label="Short Description"
            name="short_description"
            variant="outlined"
            fullWidth
            value={form.short_description}
            onChange={handleChange}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#ccc" } }}
            sx={{ bgcolor: "#1e293b", borderRadius: 1 }}
          />
          <TextField
            label="Content"
            name="content"
            variant="outlined"
            fullWidth
            multiline
            rows={8}
            value={form.content}
            onChange={handleChange}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#ccc" } }}
            sx={{ bgcolor: "#1e293b", borderRadius: 1 }}
          />
          <TextField
            label="Featured Image URL"
            name="img"
            variant="outlined"
            fullWidth
            value={form.img}
            onChange={handleChange}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#ccc" } }}
            sx={{ bgcolor: "#1e293b", borderRadius: 1 }}
          />
          <TextField
            label="Tab Title (SEO)"
            name="tabTitle"
            variant="outlined"
            fullWidth
            value={form.tabTitle}
            onChange={handleChange}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#ccc" } }}
            sx={{ bgcolor: "#1e293b", borderRadius: 1 }}
          />
          <TextField
            label="Meta Description (SEO)"
            name="metaDesc"
            variant="outlined"
            fullWidth
            value={form.metaDesc}
            onChange={handleChange}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#ccc" } }}
            sx={{ bgcolor: "#1e293b", borderRadius: 1 }}
          />
          <TextField
            label="Keywords (comma separated)"
            name="keywords"
            variant="outlined"
            fullWidth
            value={form.keywords}
            onChange={handleChange}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#ccc" } }}
            sx={{ bgcolor: "#1e293b", borderRadius: 1 }}
          />
          <Button variant="contained" color="info" type="submit">
            Publish Blog
          </Button>
          {status && <p className="text-sm text-gray-400">{status}</p>}
        </form>
      </div>

      {/* MUI Auth Popup */}
      <Dialog open={authOpen}>
        <DialogTitle>Admin Login</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Username"
            value={authUser}
            onChange={(e) => setAuthUser(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            value={authPass}
            onChange={(e) => setAuthPass(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAuthSubmit}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
