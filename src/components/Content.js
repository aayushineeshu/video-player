import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  justify-items: center;
  padding: 0rem 1.5rem 0rem;
  margin: 1em 0 0 1;
`;

export const resize = (url, resize) => {
    if (!url) return '';
  
    let size = 500;
    if (resize) {
      size = resize;
    }
  
    let rebased = url
      .replace('alignlabs.s3-us-west-1.amazonaws.com', 'align.imgix.net')
      .replace('alignlabs.s3.us-west-1.amazonaws.com', 'align.imgix.net');
  
    return `${rebased}?fit=clamp&w=${size}&h=${size}&auto=format`;
  };

export const ProfilePicImage = styled.img.attrs(props => ({
    src: props.resize
      ? resize(props.imageUrl, props.tiny ? 100 : 200)
      : props.imageUrl,
    alt: props.name
  }))`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    object-fit: cover;
    border-radius: 50%;
    border: ${({ size }) =>
      size === '2rem' 
        ? '2px solid rgba(255, 255, 255, 0.9)'
        : 'none'
    };
    box-shadow: inset 0 2px 10px rgba(255, 255, 255, 0.5),
      0 2px 10px rgba(0, 0, 0, 0.2);
  `;
  
  export const NoProfilePic = styled.div`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.9);
    background: #ccc;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 2px 10px rgba(0, 0, 0, 0.3);
  `;

  export function ProfilePic({ small, tiny, resize = true, ...props }) {
    const size = '2rem'
    return props.imageUrl ? (
      <ProfilePicImage size={size} resize={resize} {...props} />
    ) : (
      <NoProfilePic size={size} {...props} />
    );
  }

  export const ProfileSummary = ({ imageUrl }) => {
    return (
      <Wrapper>
        <ProfilePic imageUrl={imageUrl} />
      </Wrapper>
    );
  };
