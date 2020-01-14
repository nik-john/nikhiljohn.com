import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, SkillList, SkillListItem } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Nikhil and I’m a JavaScript Engineer!" />
      </Thumbnail>
      <Details>
        <h1>I work with</h1>
        <SkillList>
          <SkillListItem>JavaScript</SkillListItem>
          <SkillListItem>NodeJS</SkillListItem>
          <SkillListItem>ReactJS</SkillListItem>
          <SkillListItem>ExpressJS</SkillListItem>
          <SkillListItem>NextJS</SkillListItem>
          <SkillListItem>CSS3/SCSS</SkillListItem>
          <SkillListItem>HTML5</SkillListItem>
        </SkillList>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
