import { Flex, Heading, Grid, Icon, Text } from '@chakra-ui/react'
import LawDocIcon from './components/LawDocIcon'
import LawIcon from './components/LawIcon'
import LawOfficeIcon from './components/LawOfficeIcon'

export default function ForWhoLegalDesign() {
  return (
    <Flex
      mt={['-5rem', '-5rem', '-5rem', '-5rem']}
      py="3.5rem"
      w="100%"
      bgColor="#F8F9FA"
      h="100%"
      mx="auto"
      justify="center"
    >
      <Flex justify="center" maxW="1440px" mx="auto" h="100%">
        <Flex justify="center" w="100%" mx="auto" flexDir="column">
          <Heading
            mx="auto"
            textAlign="center"
            fontFamily="Raleway"
            fontSize={['1.875rem', '1.875rem', '1.875rem', '3rem']}
            mb="3.5rem"
            fontWeight="600"
            maxW={['270px', '300px', '600px', '1090px']}
          >
            <Text color="pink.900" as="span">
              Para quem
            </Text>{' '}
            é o treinamento de Legal Design?
          </Heading>
          <Grid
            align="center"
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
            ]}
            mx="auto"
            gap={['12', '12', '12', '20', '20']}
            mb="3rem"
          >
            <Flex align="center" maxW="322px" flexDir="column">
              <LawDocIcon />
              <Text>
                Departamentos Jurídicos que querem melhorar a experiência do
                cliente interno e externo.
              </Text>
            </Flex>
            <Flex align="center" maxW="322px" flexDir="column">
              <LawIcon />
              <Text maxW="322px">
                Escritórios de advocacia que querem trazer mais resultados para
                os seus clientes e transformá-los em fãs.
              </Text>
            </Flex>
            <Flex align="center" maxW="322px" flexDir="column">
              <LawOfficeIcon />
              <Text>
                Equipes de órgãos públicos que querem trazer uma melhor
                acessibilidade aos direitos.
              </Text>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  )
}
