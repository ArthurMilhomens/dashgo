import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && <Box mr="4" textAlign="right">
        <Text>Arthur</Text>
        <Text color="gray.300" fontSize="small">
          arthur@email.com
        </Text>
      </Box>}

      <Avatar size="md" name="Arthur" src="https://github.com/ArthurMilhomens.png" />
    </Flex>
  );
}