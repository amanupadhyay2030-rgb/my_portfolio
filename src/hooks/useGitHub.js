import { useState, useEffect } from 'react';
import { PROFILE } from '../config/profile';
import { FALLBACK_GITHUB_DATA } from '../data/github';

export const useGitHub = () => {
  const [data, setData] = useState({
    profile: FALLBACK_GITHUB_DATA.profile,
    repos: FALLBACK_GITHUB_DATA.repositories,
    loading: true,
    error: null,
    isFallback: true,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchGitHub = async () => {
      const username = PROFILE.githubUsername || PROFILE.socials.github.replace(/https?:\/\/github\.com\/?/, '').replace(/\/$/, '');

      if (!username) {
        if (isMounted) {
          setData({
            profile: FALLBACK_GITHUB_DATA.profile,
            repos: FALLBACK_GITHUB_DATA.repositories,
            loading: false,
            error: null,
            isFallback: true,
          });
        }
        return;
      }

      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ]);

        if (!profileRes.ok) {
          throw new Error('GitHub profile not reachable or rate-limited');
        }

        const profileData = await profileRes.json();
        const reposData = reposRes.ok ? await reposRes.json() : [];

        if (isMounted) {
          setData({
            profile: {
              name: profileData.name || PROFILE.name,
              login: profileData.login || username,
              avatar_url: profileData.avatar_url || '',
              bio: profileData.bio || PROFILE.subheading,
              public_repos: profileData.public_repos || 0,
              followers: profileData.followers || 0,
              following: profileData.following || 0,
              location: profileData.location || PROFILE.location,
              html_url: profileData.html_url || `https://github.com/${username}`,
            },
            repos: Array.isArray(reposData) && reposData.length > 0 
              ? reposData.map((r) => ({
                  id: r.id,
                  name: r.name,
                  description: r.description || "Software repository",
                  html_url: r.html_url,
                  stargazers_count: r.stargazers_count || 0,
                  forks_count: r.forks_count || 0,
                  language: r.language || "Code",
                  topics: r.topics || []
                }))
              : FALLBACK_GITHUB_DATA.repositories,
            loading: false,
            error: null,
            isFallback: false,
          });
        }
      } catch (err) {
        if (isMounted) {
          setData({
            profile: {
              ...FALLBACK_GITHUB_DATA.profile,
              name: PROFILE.name,
              login: username,
              html_url: `https://github.com/${username}`,
            },
            repos: FALLBACK_GITHUB_DATA.repositories,
            loading: false,
            error: err.message,
            isFallback: true,
          });
        }
      }
    };

    fetchGitHub();

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
};
