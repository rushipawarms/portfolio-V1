import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import SociaLink from '../social-link/social-link.component';
import {MdEmail} from 'react-icons/md'
import {
  FaLinkedin,
  
  FaGithubSquare,
} from 'react-icons/fa';

const socialsInfo = [
  {
    name: 'github',
    socialUrl: 'https://github.com/rushipawarms',
    svgIcon: FaGithubSquare,
    color: 'black',
  },
  {
    name: 'linkedin',
    socialUrl: 'https://www.linkedin.com/in/rushikesh-p-507a99174',
    svgIcon: FaLinkedin,
    color: 'linkedin',
  },
 
];

const Socials = () => {
  return (
    <Box style={{marginTop:"-5rem"}} p={4}>
      
      
      <Text fontSize="md" fontWeight="bold">
        You can find me on:
      </Text>

      <br />
      <Flex maxW="150px" justify="space-evenly">
        {socialsInfo.map((socialInfo) => (
          <SociaLink
            key={socialInfo.name}
            color={socialInfo.color}
            socialUrl={socialInfo.socialUrl}
            svgIcon={socialInfo.svgIcon}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Socials;
