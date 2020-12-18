import * as React from 'react';
import { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { graphql, Link } from 'gatsby';
import Utterances from '../components/Utterances'

import moment from 'moment';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faListUl, faLayerGroup, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// import AdSense from 'react-adsense';
import {
  FacebookShareButton,
  TwitterShareButton,
  // EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  // EmailIcon,
} from 'react-share';

import Layout from '../components/Layout';
import Toc from '../components/Toc';
import SEO from '../components/seo';

import 'katex/dist/katex.min.css';
import './code-theme.scss';
import './post.scss';

const config = require('../../config');

export interface postProps {
  data: any;
  pageContext: { slug: string; series: any[]; lastmod: string };
  isMobile: boolean;
}

const Post = (props: postProps) => {
  const { data, pageContext, isMobile } = props;
  const { markdownRemark } = data;
  const { frontmatter, html, tableOfContents, fields, excerpt } = markdownRemark;
  const { title, date, tags, keywords } = frontmatter;
  let update = frontmatter.update;
  if (Number(update?.split(',')[1]) === 1) update = null;
  const { slug } = fields;
  const { series } = pageContext;

  interface iConfig {
    enablePostOfContents: boolean;
    enableSocialShare: boolean;
    disqusShortname?: string;
  }
  const { enablePostOfContents, enableSocialShare }: iConfig = config;

  const [isInsideToc, setIsInsideToc] = useState(false);

  const isTableOfContents = enablePostOfContents && tableOfContents !== '';
  const isSocialShare = enableSocialShare;

  useEffect(() => {
    if (isMobile) {
      const adDiv = document.querySelector('.ad') as HTMLDivElement;

      if (adDiv) {
        const maxWidth = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight;
        adDiv.style.maxWidth = `${maxWidth}px`;
        adDiv.style.display = 'flex';
        adDiv.style.justifyContent = 'flex-end';
      }
    }
  }, [isMobile]);

  // 포스트 태그 삭제
  const mapTags = tags.map((tag: string) => {
    return (
      <li key={tag} className="blog-post-tag">
        <Link to={`/tags#${tag}`}>{`#${tag}`}</Link>
      </li>
    );
  });

  const mapSeries = series.map((s: any) => {
    return (
      <li key={`${s.slug}-series-${s.num}`} className={`series-item ${slug === s.slug ? 'current-series' : ''}`}>
        <Link to={s.slug}>
          <span>{s.title}</span>
          <div className="icon-wrap">{slug === s.slug ? <Fa icon={faAngleLeft} /> : null}</div>
        </Link>
      </li>
    );
  });

  const metaKeywords: (keywordList: string[], tagList: string[]) => string[] = (
    keywordList: string[],
    tagList: string[]
  ) => {
    const resultKeywords = new Set();

    for (const v of [...keywordList, ...tagList]) {
      resultKeywords.add(v);
    }

    return Array.from(resultKeywords) as string[];
  };

  // const goBack = () => {
  //   window.history.back();
  // }

  return (
    <>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "datePublished": "${moment(new Date(date)).toISOString()}",
              ${update ? `"dateModified": "${moment(new Date(update)).toISOString()}",` : ''}
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${config.siteUrl}"
              },
              "author": {
                "@type": "Person",
                "name": "${config.name}"
              },
              "headline": "${title}",
              ${
                config.profileImageFileName
                  ? `"publisher": {
                "@type" : "organization",
                "name" : "${config.name}",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${config.siteUrl}${require(`../images/${config.profileImageFileName}`)}"
                }
              },
              "image": ["${config.siteUrl}${require(`../images/${config.profileImageFileName}`)}"]`
                  : `"publisher": {
                "@type" : "organization",
                "name" : "${config.name}"
              },
              "image": []`
              }
            }
          `}
        </script>
      </Helmet>

      <SEO title={title} description={excerpt} keywords={metaKeywords(keywords, tags)} />

      <Layout>
        <div className="blog-post-container">
          <div className="blog-post">
            <a href="/">
            {/* <a onClick={goBack}> */}
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-left fa-w-14 fa-2x"><path fill="#ddd" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
            </a>
            <h1 className="blog-post-title">{title}</h1>

            <div className="blog-post-info">
              <div className="date-wrap">
                {update ? <span className="update-date">&nbsp;{`(Last Updated: ${update})`}</span> : null}
                <span className="write-date">{date}</span>
              </div>

              {tags.length && tags[0] !== 'undefined' ? (
                <>
                  {/* 페이지 태그 삭제 */}
                  <span className="dot">·</span>
                  <ul className="blog-post-tag-list">{mapTags}</ul>
                </>
              ) : null}

              {!isTableOfContents ? null : (
                <div className="blog-post-inside-toc">
                  <div
                    className="toc-button"
                    role="button"
                    onClick={() => {
                      setIsInsideToc((prev: boolean) => {
                        return !prev;
                      });
                    }}
                  >
                    <Fa icon={faListUl} />
                  </div>
                </div>
              )}
            </div>

            {!isTableOfContents ? null : (
              <div className="inside-toc-wrap" style={{ display: isInsideToc ? 'flex' : 'none' }}>
                <Toc isOutside={false} toc={tableOfContents} />
              </div>
            )}

            {series.length > 1 ? (
              <>
                <div className="series">
                  <div className="series-head">
                    <span className="head">Post Series</span>
                    <div className="icon-wrap">
                      <Fa icon={faLayerGroup} />
                    </div>
                  </div>
                  <ul className="series-list">{mapSeries}</ul>
                </div>
              </>
            ) : null}

            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          
          <Utterances repo="Diary-blog/co" />

          {isSocialShare ? (
            <div className="social-share">
              <ul>
                <li className="social-share-item facebook">
                  <FacebookShareButton url={config.siteUrl + slug}>
                    <FacebookIcon size={24} round={true} />
                  </FacebookShareButton>
                </li>
                <li className="social-share-item twitter">
                  <TwitterShareButton url={config.siteUrl + slug}>
                    <TwitterIcon size={24} round={true} />
                  </TwitterShareButton>
                </li>
              </ul>
            </div>
          ) : null}

          {/* 구글 광고
          {isDevelopment ? (
            <>
              <aside className="ad ad-dev">
                <span>Ads</span>
                <span>displayed when you deploy</span>
              </aside>
              {isDisqus ? (
                <div className="comments comments-dev">
                  <span>Comments</span>
                  <span>displayed when you deploy</span>
                </div>
              ) : null}
            </>
          ) : (
            <>
              <aside className="ad">
                <AdSense.Google
                  client={config.googleAdsenseClient || 'ca-pub-5001380215831339'}
                  slot={config.googleAdsenseSlot || '5214956675'}
                  style={{ display: 'block' }}
                  format="auto"
                  responsive="true"
                />
              </aside>

              {isDisqus ? (
                <div className="comments">
                  <DiscussionEmbed {...disqusConfig} />
                </div>
              ) : null}
            </>
          )}
          */}

        </div>

        {!isTableOfContents ? null : <Toc isOutside={true} toc={tableOfContents} />}
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
        tags
        keywords
        update(formatString: "MMM DD, YYYY")
        read
      }
    }
  }
`;

const mapStateToProps = ({ isMobile }: { isMobile: boolean }) => {
  return { isMobile };
};

export default connect(mapStateToProps)(Post);
