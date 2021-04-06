import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box marginRight="4" textAlign="right">
            <Text>Matheus Cardoso</Text>
            <Text color="gray.300" fontSize="small">
              matheus.silvacardoso10@gmail.com
            </Text>
          </Box>
        )
      }

      <Avatar size="md" name="Matheus Cardoso" src="https://github.com/thyusofficial.png" />
    </Flex>
  )
}