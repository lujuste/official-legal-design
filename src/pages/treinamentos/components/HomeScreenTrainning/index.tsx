import {
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'

import TrainningIconPage from '../TrainningIconPage'

export default function HomeScreenTrainning() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    '2xl': true,
  })

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    xl: false,
  })

  return (
    <Flex
      w="100%"
      bgImage="url('/images/bgPink.webp')"
      h={['100%', '100%', '100%', '100%', '110vh']}
      bgSize={['250%', 'cover', 'cover', '100%', '100%']}
      bgRepeat="no-repeat"
      zIndex="999"
      justify="center"
      mx="auto"
      overflowX="hidden"
      py="5rem"
      mb={['0', '0', '0', '0']}
    >
      <Flex
        mt={['3.5rem', '3.5rem', '3.5rem', '12rem', '12rem', '16rem']}
        flexDir="column"
        mx="auto"
        align="center"
      >
        <Flex flexDir="column" mx="auto" align="center" justify="center">
          <Icon mx="auto" as={TrainningIconPage} />
          <Heading
            color="pink.900"
            fontFamily="Raleway"
            fontWeight="600"
            fontSize={['1.85rem', '1.85rem', '1.85rem', '5.563rem']}
            my="0.5rem"
          >
            Treinamentos
          </Heading>
        </Flex>
        <Text
          fontSize={['1.063rem', '1.063rem', '1.063rem', '2.188rem']}
          fontFamily="Raleway"
          fontWeight="600"
          letterSpacing={['10%', '10%', '10%', '5px']}
          lineHeight="3.125rem"
          mt={['0.3rem', '0.3rem', '0.7rem', '-1rem']}
          mx="auto"
          mb={['0', '0', '0', '1.5rem']}
        >
          LEGAL DESIGN
        </Text>
        <Text
          mx="auto"
          fontSize="1rem"
          lineHeight="1.5"
          textAlign="center"
          maxW={['331px', '331px', '331px', '503px']}
          color="#666666"
          fontWeight="400"
        >
          Treinamos seu time para que sejam capazes de criar documentos que
          geram mais resultados por serem mais amigáveis aos usuários.
        </Text>
        <Button
          w="182px"
          h="50px"
          bgColor="pink.900"
          color="white"
          px="1rem"
          mx="auto"
          mt={['1.5rem', '1.5rem', '1.5rem', '2rem']}
          fontSize="0.875rem"
        >
          Quero treinar meu time
        </Button>
      </Flex>
    </Flex>
  )
}
