import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * Product name tags that match actual Discourse community tags
 * Used to identify and display relevant product associations for community topics
 *
 * To add a new product tag:
 * 1. Add the lowercase, hyphenated version to this array
 * 2. The formatProductTag function will automatically format it for display
 */
const PRODUCT_TAGS = [
  '1secure',
  'change-tracker',
  'endpoint-protector',
  'groupid',
  'password-policy-enforcer',
  'pingcastle',
  'privilege-secure',
  'strongpoint',
  'threat-prevention',
  'auditor',
  'data-classification',
  'enterprise-auditor',
  'password-management',
  'password-secure',
  'policypak',
  'recovery-active-directory',
  'threat-manager',
  'identitymanager',
  'activity-monitor',
  'access-analyzer',
  'platform-governance-salesforce',
  'identitymanager-onprem',
  'identity-manager',
  'directory-manager',
  'platform-governance-netsuite',
  'access-information-center',
];

/**
 * Formats a hyphenated product tag for display
 * Converts "endpoint-protector" to "Endpoint Protector"
 */
const formatProductTag = (tag) => {
  return tag
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Truncates text to a specified length and adds ellipsis
 * Used to ensure consistent excerpt lengths in the UI
 */
const truncateText = (text, maxLength = 120) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Displays a featured community discussion with product tag and engagement stats
 * Used in the rotating carousel to highlight trending community content
 */
function FeaturedDiscussion({ topic }) {
  if (!topic) return null;

  // Find the first product tag that matches our known product list
  const productTag = topic.tags
    ? topic.tags.find((tag) => typeof tag === 'string' && PRODUCT_TAGS.includes(tag.toLowerCase()))
    : null;

  return (
    <div className={styles.featuredCard}>
      <div className={styles.featuredHeader}>
        <span className={styles.featuredLabel}>🔥 Trending Discussion</span>
        {productTag && (
          <span className={styles.featuredProductTag}>{formatProductTag(productTag)}</span>
        )}
      </div>
      <Link
        to={`https://community.netwrix.com/t/${topic.slug}/${topic.id}`}
        className={styles.featuredLink}
      >
        <h3 className={styles.featuredTitle}>{topic.title}</h3>
        <p className={styles.featuredExcerpt}>{truncateText(topic.excerpt)}</p>
        <div className={styles.featuredStats}>
          <span>💬 {topic.posts_count} replies</span>
          <span>👀 {topic.views} views</span>
          <span>❤️ {topic.like_count} likes</span>
        </div>
      </Link>
    </div>
  );
}

/**
 * CommunityHighlights Component
 *
 * Fetches and displays trending community discussions in an auto-rotating carousel.
 *
 * Features:
 * - Fetches top 3 most engaging topics from Discourse API
 * - Infinite carousel that slides in one direction only
 * - Auto-advances every 10 seconds with 1.8s smooth transitions
 * - Manual navigation via indicator dots
 * - Engagement scoring: likes×10 + views×0.1 + posts×2
 *
 * API Endpoint: https://community.netwrix.com/latest.json
 */
function CommunityHighlights() {
  const [featuredTopics, setFeaturedTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null); // Reference for smooth carousel transitions

  useEffect(() => {
    async function fetchCommunityHighlights() {
      try {
        // Fetch latest topics for featured discussion
        const latestResponse = await fetch('https://community.netwrix.com/latest.json');
        const latestData = await latestResponse.json();

        // Get top 3 featured topics based on engagement
        if (latestData?.topic_list?.topics) {
          const topTopics = latestData.topic_list.topics
            .filter((t) => t.like_count > 2) // Topics with some engagement
            .sort((a, b) => {
              // Sort by combined engagement score (likes + views + posts)
              const scoreA =
                (a.like_count || 0) * 10 + (a.views || 0) * 0.1 + (a.posts_count || 0) * 2;
              const scoreB =
                (b.like_count || 0) * 10 + (b.views || 0) * 0.1 + (b.posts_count || 0) * 2;
              return scoreB - scoreA;
            })
            .slice(0, 3);

          // Fallback to first 3 topics if not enough engaging ones
          if (topTopics.length < 3) {
            const fallbackTopics = latestData.topic_list.topics.slice(0, 3);
            setFeaturedTopics(fallbackTopics);
          } else {
            setFeaturedTopics(topTopics);
          }
        }
      } catch (error) {
        console.error('Failed to fetch community highlights:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCommunityHighlights();
  }, []);

  // Carousel auto-advance effect
  useEffect(() => {
    if (featuredTopics.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextSlide = prev + 1;
          // If we've moved past the last real slide, we're now showing the duplicate
          if (nextSlide >= featuredTopics.length) {
            // After the transition completes, instantly reset to slide 0 without animation
            setTimeout(() => {
              if (trackRef.current) {
                trackRef.current.style.transition = 'none';
                setCurrentSlide(0);
                // Re-enable transitions for future animations
                setTimeout(() => {
                  if (trackRef.current) {
                    trackRef.current.style.transition =
                      'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                  }
                }, 50);
              }
            }, 1850);
            return nextSlide;
          }
          return nextSlide;
        });
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [featuredTopics.length]);

  if (loading) {
    return (
      <section className={styles.communityHighlights}>
        <div className="container">
          <div className={styles.loadingState}>
            <h2>Loading community highlights...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.communityHighlights} id="community">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Need More Help? Join Our Community!</h2>
          <p className={styles.sectionSubtitle}>
            Beyond our documentation, get real-world insights and solutions from other security
            professionals just like you.
          </p>
        </div>

        <div className={styles.carouselContainer}>
          {featuredTopics.length > 0 && (
            <div className={styles.carouselWrapper}>
              <div
                ref={trackRef}
                className={styles.carouselTrack}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: 'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {featuredTopics.map((topic, index) => (
                  <div key={`${topic.id}-${index}`} className={styles.carouselSlide}>
                    <FeaturedDiscussion topic={topic} />
                  </div>
                ))}
                {/* Duplicate first slide for infinite effect */}
                {featuredTopics.length > 0 && (
                  <div key={`${featuredTopics[0].id}-duplicate`} className={styles.carouselSlide}>
                    <FeaturedDiscussion topic={featuredTopics[0]} />
                  </div>
                )}
              </div>
              {featuredTopics.length > 1 && (
                <div className={styles.carouselIndicators}>
                  {featuredTopics.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className={styles.communityAction}>
          <Link to="https://community.netwrix.com" className="button button--primary button--lg">
            🚀 Join the Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CommunityHighlights;
