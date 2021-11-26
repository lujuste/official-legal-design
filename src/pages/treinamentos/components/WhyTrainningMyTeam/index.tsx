import {
  Flex,
  Heading,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
} from '@chakra-ui/react'

import { BsTriangleFill } from 'react-icons/bs'

export default function WhyTrainningMyTeam() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    '2xl': true,
  })

  return (
    <Flex
      flexDir={['column', 'column', 'column', 'row']}
      maxW="1400"
      mx="auto"
      justify="center"
      align="center"
      h={['100%']}
      pb="6rem"
      mt={['0', '0', '0', '10rem', '0', '0']}
      px={['0', '0', '0', '6rem']}
      mb={['0', '0', '0', '4rem']}
    >
      <Flex
        flexDir="column"
        maxW={['264px', '264px', '264px', '400px', '518px']}
        h="auto"
        justify="center"
        mx="auto"
      >
        <Heading
          fontFamily="Raleway"
          lineHeight={['2.5rem', '2.5rem', '2.5rem', '3.438rem']}
          fontSize={['1.875rem', '1.875rem', '1.875rem', '3rem']}
          mx="auto"
          fontWeight="600"
          textAlign={['center', 'center', 'center', 'left']}
          mt={['0', '0', '0', '-5.5rem']}
        >
          <Text as="span" color="pink.900">
            Porque treinar{' '}
          </Text>
          meu time em Legal Design?
        </Heading>
        <Text
          textAlign={['center', 'center', 'center', 'left']}
          mt="1rem"
          color="#666666"
        >
          Times que aplicam o Legal Design em seus documentos têm:
        </Text>
        {isWideVersion && (
          <Button
            w="100%"
            mt="1.5rem"
            maxW="229px"
            h="50px"
            mr="auto"
            bgColor="pink.900"
            color="white"
            px="1rem"
            fontSize="0.875rem"
          >
            Quero contratar o treinamento
          </Button>
        )}
      </Flex>
      <Flex
        flex="1"
        flexDir={['column', 'column', 'column', 'row']}
        align="center"
        mt={['1.5rem', '1.5rem', '1.5rem', '-4rem']}
        maxW={['300px', '300px', '300px', '567px']}
        h="auto"
        mx="auto"
      >
        <List ml={['0', '0', '0', '1rem']} pb="1rem" spacing={5}>
          <ListItem
            as="h2"
            display="flex"
            fontSize="1rem"
            color="#666666"
            fontWeight="normal"
            lineHeight="1.5rem"
          >
            <ListIcon
              mt="0.2rem"
              textAlign="justify"
              justifyItems="initial"
              transform="rotate(90deg)"
              mr="1rem"
              w={4}
              h={4}
              as={BsTriangleFill}
              color="pink.900"
            />
            <Text>
              <Text as="span" color="pink.900">
                Menos vai e volta{' '}
              </Text>{' '}
              na negociação de contratos
            </Text>
          </ListItem>
          <ListItem
            color="#666666"
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
          >
            <ListIcon
              mt="0.4rem"
              textAlign="justify"
              justifyItems="initial"
              transform="rotate(90deg)"
              mr="1rem"
              w={4}
              h={4}
              as={BsTriangleFill}
              color="pink.900"
            />
            <Text>
              Uma{' '}
              <Text as="span" color="pink.900">
                diminuição de dúvidas
              </Text>{' '}
              em relação ao conteúdo de um documento
            </Text>
          </ListItem>
          <ListItem
            color="#666666"
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
          >
            <ListIcon
              mt="0.4rem"
              textAlign="justify"
              justifyItems="initial"
              transform="rotate(90deg)"
              mr="1rem"
              w={4}
              h={4}
              as={BsTriangleFill}
              color="pink.900"
            />
            <Text>
              {' '}
              <Text
                as="span"
                sx={{
                  color: 'pink.900',
                }}
              >
                {' '}
                Menos{' '}
              </Text>{' '}
              pedidos de{' '}
              <Text
                sx={{
                  color: 'pink.900',
                }}
                as="span"
              >
                edições
              </Text>{' '}
              nos documentos
            </Text>
          </ListItem>
          <ListItem
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
            color="#666666"
          >
            <ListIcon
              mt="0.4rem"
              textAlign="justify"
              justifyItems="initial"
              transform="rotate(90deg)"
              mr="1rem"
              w={4}
              h={4}
              as={BsTriangleFill}
              color="pink.900"
            />
            <Text>
              Um{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                {' '}
                menor ciclo{' '}
              </Text>{' '}
              de{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                vendas
              </Text>
            </Text>
          </ListItem>
          <ListItem
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
            color="#666666"
          >
            <ListIcon
              mt="0.4rem"
              textAlign="justify"
              justifyItems="initial"
              transform="rotate(90deg)"
              mr="1rem"
              w={4}
              h={4}
              as={BsTriangleFill}
              color="pink.900"
            />
            <Text>
              Uma maior{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                {' '}
                taxa de sucesso{' '}
              </Text>{' '}
              em ações no judiciário
            </Text>
          </ListItem>
        </List>
      </Flex>

      {!isWideVersion && (
        <Button
          w="100%"
          mt="1.5rem"
          maxW="229px"
          h="50px"
          mx="auto"
          bgColor="pink.900"
          color="white"
          px="1rem"
          fontSize="0.875rem"
        >
          Quero contratar o treinamento
        </Button>
      )}
    </Flex>
  )
}
