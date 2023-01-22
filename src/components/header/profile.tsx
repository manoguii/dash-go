import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign={'right'}>
          <Text>Guilherme David</Text>
          <Text color={'gray.300'} fontSize="small">
            guilhermedavidrk@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size={'md'}
        name="Guilherme David"
        src="https://github.com/manoguii.png"
      />
    </Flex>
  )
}
