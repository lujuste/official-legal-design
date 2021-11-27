import type { NextPage } from 'next'
import {
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Icon,
  Spinner,
  useBreakpointValue,
} from '@chakra-ui/react'

import ContractBeforeIcon from './ContractBeforeIcon'
import ContractAfterIcon from './ContractAfterIcon'
import ContractAfterIconDesktop from './components/ContractAfterMobileIcon'
import WhyLegalDesign from './components/WhyLegalDesign'
import Diagram from './components/Diagram'
import MoreBusiness from './components/MoreBusiness'
import ContractImage from './components/ContractImage'

import dynamic from 'next/dynamic'
import LegalDesignComparation from './components/LegalDesignComparation'

const LegalDesign: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    '2xl': true,
  })
  return (
    <>
      <Flex
        as="section"
        w="100%"
        h={['100%']}
        bgImage="url('/images/bgPink.webp')"
        bgSize={isWideVersion ? 'contain' : '250%'}
        bgRepeat="no-repeat"
        zIndex="-999"
        align="center"
        justify="center"
        mx="auto"
        overflowX="hidden"
      >
        <Flex
          w="100%"
          maxW="1400"
          mx="auto"
          h="100%"
          align="center"
          py={['7rem', '7rem', '10rem']}
          flexDir="column"
        >
          <Heading
            as="h1"
            fontFamily="Raleway"
            textAlign="center"
            fontWeight="600"
            maxW={['199px', '199px', '320px']}
            fontSize={['30px', '30px', '36px', '48px']}
            lineHeight={['40px', '40px', '48px', '55px']}
            w="100%"
            h="auto"
          >
            O que é{' '}
            <Text as="span" color="pink.900">
              Legal Design?
            </Text>
          </Heading>
          <Text
            fontWeight="400"
            fontSize={['0.938rem', '0.938rem', '1rem']}
            lineHeight="24px"
            maxW={['329px', '329px', '529px', '855px']}
            w="100%"
            h="auto"
            textAlign="center"
            mt="25px"
          >
            É uma técnica focada na concepção de documentos jurídicos utilizando
            princípios de design e experiência do usuário. Dessa maneira, os
            usuários de documentos jurídicos são capazes de entender esse
            documento e, por isso, ele passa a servir para sua real finalidade:
            fazer negócios.
          </Text>
          {isWideVersion ? (
            <>
              <LegalDesignComparation />
            </>
          ) : (
            <>
              <Flex
                flexDir={['column', 'column', 'column', 'row']}
                mx="auto"
                w="100%"
                align="center"
              >
                <Text
                  fontSize="25px"
                  fontWeight="600"
                  fontFamily="Raleway"
                  color="pink.900"
                  transform="translateY(40px)"
                >
                  antes
                </Text>
                <Flex
                  transform="translateX(-80px)"
                  mt={['-2rem', '-2rem', '2rem', '2rem']}
                  maxW={['500px', '500px', '800px']}
                  position="relative"
                >
                  <Icon as={ContractBeforeIcon} />
                </Flex>
                <Text
                  fontSize="25px"
                  fontWeight="600"
                  fontFamily="Raleway"
                  color="pink.900"
                  mt={['-2rem', '-2rem', '2rem', '2rem']}
                >
                  depois
                </Text>
              </Flex>
              <Flex
                transform={[
                  'translateX(110px)',
                  'translateX(110px)',
                  'translateX(90px)',
                  'translateX(110px)',
                ]}
                mt="-1.5rem"
                maxW={['600px', '600px', '700px', '800px']}
                position="relative"
              >
                <Icon w="100%" h="auto" as={ContractAfterIcon} />
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
      <WhyLegalDesign />
      <Diagram />
      <MoreBusiness />
    </>
  )
}
export default LegalDesign
