import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign={'right'}>
        <Text>Guilherme David</Text>
        <Text color={'gray.300'} fontSize="small">
          guilhermedavidrk@gmail.com
        </Text>
      </Box>

      <Avatar
        size={'md'}
        name="Guilherme David"
        src="https://github.com/manoguii.png"
      />
    </Flex>
  )
}
