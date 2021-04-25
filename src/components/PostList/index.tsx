import * as React from 'react';
import { memo, useEffect, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { throttle } from 'lodash';

import './postList.scss';

export interface PostListProps {
  posts: any[];
}

const PostList = memo((props: PostListProps) => {
  const { posts } = props;
  const [showCnt, setShowCnt] = useState(20);

  const throttleScrollHandler = useCallback(
    throttle(() => {
      if (
        window.outerHeight > (document.querySelector('.post-list') as HTMLDivElement).getBoundingClientRect().bottom
      ) {
        setShowCnt((prev: number) => {
          if (prev >= posts.length) return prev;
          return prev + 10;
        });
      }
    }, 250),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', throttleScrollHandler);

    return () => {
      window.removeEventListener('scroll', throttleScrollHandler);
    };
  }, []);

  posts.sort((a: any, b: any) => {
    const aDate = new Date(a.node.frontmatter.update ?? a.node.frontmatter.date);
    const bDate = new Date(b.node.frontmatter.update ?? b.node.frontmatter.date);

    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  });

  const mapPost = posts.map((post: any, i: number) => {
    const { node } = post;
    const { excerpt, fields, frontmatter } = node;
    const { slug } = fields;
    const { date, title, tags, cover, read } = frontmatter; // tags 삭제
    let update = frontmatter.update;
    if (Number(update.split(',')[1]) === 1) update = null;

    /* 메인 목록에서 태그 삭제*/
    const mapTag = tags.map((tag: string) => {
      if (tag === 'undefined') return;

      return (
        <p key={`${slug}-${tag}`} className="tag">
          <span>
            <Link to={`/tags#${tag}`}>{`#${tag}`}</Link>
          </span>
        </p>
      );
    });
    

    return (
      <li key={slug} className={`post ${i < showCnt ? 'show' : 'hide'}`}>
        <article className="underline">
          <div className="cover">
            <Link to = {slug}>
              {
                cover === null ? (<img src = {require('./thumnail.png')} alt = {title} />) :
              ( <img src = {cover.childImageSharp.resolutions.src} alt = {title} /> )
              }
            </Link>
          </div>
          <div className="info-box">
            <h2 className="title">
              <Link to={slug}>{title}</Link>
            </h2>
            <span className="excerpt">
              <Link to={slug}>{excerpt}</Link>
            </span>
            <div className="info">
            <div className="date-wrap">
                <ul className="post-list-title">
                  <li>
                    <p className="sub-title">DATE</p>
                    <span className="date">{date}</span>{update ? <span className="update"><span className="line"></span>{`${update}`}</span> : null}
                  </li>
                  <li>
                    <p className="sub-title">READ</p>
                    <span className="sub-contents">{read ? <span>{`${read}`}</span> : <span>　</span>}</span>
                  </li>
                  <li>
                    <p className="sub-title">TAG</p>
                    {tags.length && tags[0] !== 'undefined'}
                    <div className="tag-list">{mapTag}</div>  
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </li>
    );
  });
  return (
    <div className="post-list">
      <ul>{mapPost}</ul>
    </div>
  );
});

export default PostList;
