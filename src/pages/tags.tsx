import * as React from 'react';
import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import './styles/tags.scss';
import PostList from '../components/PostList';

export interface TagsPageProps {
  data: any;
}



const Tags = (props: TagsPageProps) => {
  const { data } = props;
  const { group } = data.allMarkdownRemark;

  const [largeCount, setLargeCount] = useState(0);
  const [targetTag, setTargetTag] = useState(location.hash.split('#')[1]);
  const [posts, setPosts] = useState([])
  interface groupItem {
    fieldValue: string;
    totalCount: number;
  }

  group.sort((a: groupItem, b: groupItem) => {
    const x = a.fieldValue.toLocaleLowerCase();
    const y = b.fieldValue.toLocaleLowerCase();

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  });

  useEffect(() => {
    setTargetTag(location.hash.split('#')[1]);
  },[location.hash])

  // tag list
  const tagList: any[] = group.map((g: groupItem) => {
    const getFontSize = () => {
      let fontSize = Math.round(50 / (largeCount / g.totalCount)).toString();
      if (fontSize.length <= 1) fontSize = `0${fontSize}`;
      return `1.${fontSize}rem`;
    };

    return (
      <li key={g.fieldValue}>
        <span
          className="tag-text"
          style={{
            fontSize: g.fieldValue !== 'undefined' ? getFontSize() : '1rem',
            opacity: g.fieldValue === targetTag ? '0.9' : '0.5',
            fontWeight: g.fieldValue === targetTag ? 'bold' : 'normal',
            color: g.fieldValue === targetTag ? '#f87325' : '#ffa46f',
          }}
          onClick={() => {
            setTargetTag(g.fieldValue);
          }}
        >
          <a href={`#${g.fieldValue}`}>{g.fieldValue}</a>
        </span>
      </li>
    );
  });

  tagList.sort((a: React.ReactElement) => {
    if (a.key === 'undefined') return -1;
    return 0;
  });


  
  // post list 
  const getPostList: () => any[] = () => {
    if (group.filter((g: groupItem) => g.fieldValue === targetTag).length) {
      return group.filter((g: groupItem) => g.fieldValue === targetTag)[0].edges;
    }
    
    return [];
  };

  useEffect(() => {
    setPosts(getPostList() as any)
  }, [targetTag])
  
  
  useEffect(() => {
    let large = 0;
    for (const g of group) {
      if (g.fieldValue !== 'undefined' && g.totalCount > large) large = g.totalCount;
    }
    setLargeCount(large);

    return () => {};
  }, [group]);

  useEffect(() => {
    if (location.hash) setTargetTag(location.hash.split('#')[1]);
    return () => {};
  }, []);

  return (
    <Layout>
      <SEO title="Tags" />
      <div id="tags">
        {/* 태그 리스트 잠시 숨겨둠*/}
        {/* <div className="tag-list-wrap">
          <ul>{tagList}</ul>
        </div> */}
        <PostList posts={posts} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        edges {
          node {
            excerpt(format: PLAIN)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              update(formatString: "MMM DD, YYYY")
              title
              tags
              cover {
                childImageSharp {
                  fixed(width: 150) {
                    ...GatsbyImageSharpFixed
                  }
                  resolutions{
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
              read
            }
          }
        }
      }
    }
  }
`;

export default Tags;
