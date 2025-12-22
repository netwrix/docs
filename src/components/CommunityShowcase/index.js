import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Product name tags - shared constant to avoid recreation (matching actual Discourse tags)
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

// Helper function to format product tag display
const formatProductTag = (tag) => {
  return tag
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

function CommunityCard({ title, icon, children }) {
  return (
    <div className={styles.communityCard}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{icon}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}

function TopicItem({ topic, showCategory = false, showVotes = false, showSolved = true }) {
  const timeAgo = new Date(topic.created_at).toLocaleDateString();

  // Find product tag for all sections that should show it
  const productTag = topic.tags
    ? topic.tags.find((tag) => PRODUCT_TAGS.includes(tag.toLowerCase()))
    : null;

  return (
    <Link
      to={`https://community.netwrix.com/t/${topic.slug}/${topic.id}`}
      className={styles.topicItemCard}
    >
      <div className={styles.topicMeta}>
        {showSolved && topic.has_accepted_answer && (
          <span className={styles.solvedBadge}>✅ Solved</span>
        )}
        {showVotes && topic.vote_count > 0 && (
          <span className={styles.voteBadge}>👍 {topic.vote_count}</span>
        )}
        {productTag && (
          <span className={styles.productTagBadge}>{formatProductTag(productTag)}</span>
        )}
        {showCategory === true && topic.category && (
          <span className={styles.categoryBadge}>{topic.category.name}</span>
        )}
      </div>
      <h4 className={styles.topicTitle}>{topic.title}</h4>
      <div className={styles.topicStats}>
        <span>💬 {topic.posts_count}</span>
        <span>👀 {topic.views}</span>
        <span>📅 {timeAgo}</span>
      </div>
    </Link>
  );
}

function CommunityShowcase() {
  const [solvedTopics, setSolvedTopics] = useState([]);
  const [featureRequests, setFeatureRequests] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCommunityData() {
      try {
        // Fetch latest topics
        const latestResponse = await fetch('https://community.netwrix.com/latest.json');
        const latestData = await latestResponse.json();

        // Fetch product updates from announcement tag
        const announcementResponse = await fetch(
          'https://community.netwrix.com/tag/announcement.json'
        );
        const announcementData = await announcementResponse.json();

        // Fetch solved topics using search API
        const solvedResponse = await fetch(
          'https://community.netwrix.com/search.json?q=status%3Asolved%20order%3Aviews'
        );
        const solvedData = await solvedResponse.json();

        // Fetch top voted ideas using quarterly top ideas endpoint
        const topResponse = await fetch(
          'https://community.netwrix.com/tag/ideas/l/top.json?period=quarterly'
        );
        const topData = await topResponse.json();

        if (latestData?.topic_list?.topics) {
          const topics = latestData.topic_list.topics;

          // Solved topics from search API
          if (solvedData?.topics) {
            setSolvedTopics(solvedData.topics.filter((t) => t.has_accepted_answer).slice(0, 3));
          } else {
            // Fallback: filter from latest topics
            setSolvedTopics(topics.filter((t) => t.has_accepted_answer).slice(0, 3));
          }

          // Top voted ideas from the quarterly ideas endpoint
          if (topData?.topic_list?.topics) {
            setFeatureRequests(topData.topic_list.topics.slice(0, 3));
          }

          // Product updates from announcement tag endpoint
          if (announcementData?.topic_list?.topics) {
            setAnnouncements(announcementData.topic_list.topics.slice(0, 3));
          }
        }
      } catch (error) {
        console.error('Failed to fetch community data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCommunityData();
  }, []);

  if (loading) {
    return (
      <section className={styles.communityShowcase}>
        <div className="container">
          <div className={styles.loadingState}>
            <h2>Loading community activity...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.communityShowcase}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Join Our Active Community</h2>
          <p className={styles.sectionSubtitle}>
            Connect with other Netwrix users, get help, share ideas, and stay updated with the
            latest announcements
          </p>
        </div>

        <div className={styles.communityGrid}>
          <CommunityCard title="Recently Solved" icon="✅">
            {solvedTopics.length > 0 ? (
              solvedTopics.map((topic, idx) => (
                <TopicItem key={idx} topic={topic} showSolved={true} />
              ))
            ) : (
              <p className={styles.emptyState}>Check back soon for solved discussions!</p>
            )}
            <Link
              to="https://community.netwrix.com/search?q=status:solved"
              className={styles.viewAllLink}
            >
              Browse solved topics →
            </Link>
          </CommunityCard>

          <CommunityCard title="Top Voted Ideas" icon="💡">
            {featureRequests.length > 0 ? (
              featureRequests.map((topic, idx) => (
                <TopicItem key={idx} topic={topic} showVotes={true} showSolved={false} />
              ))
            ) : (
              <p className={styles.emptyState}>No feature requests yet</p>
            )}
            <Link
              to="https://community.netwrix.com/tag/ideas/l/top?period=quarterly"
              className={styles.viewAllLink}
            >
              View popular ideas →
            </Link>
          </CommunityCard>

          <CommunityCard title="Product Updates" icon="📢">
            {announcements.length > 0 ? (
              announcements.map((topic, idx) => <TopicItem key={idx} topic={topic} />)
            ) : (
              <p className={styles.emptyState}>No recent announcements</p>
            )}
            <Link
              to="https://community.netwrix.com/tag/announcement"
              className={styles.viewAllLink}
            >
              View all updates →
            </Link>
          </CommunityCard>
        </div>

        <div className={styles.communityActions}>
          <Link to="https://community.netwrix.com" className="button button--primary button--lg">
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CommunityShowcase;