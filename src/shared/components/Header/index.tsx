import {
  Flex,
  Icon,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
} from '@chakra-ui/react'

import { MotionButton, MotionFlex } from '../../styles/animation'

import Link from 'next/link'

import logoBits from '../../../../public/images/bits-academy.svg'

import { useState, useEffect } from 'react'
import NavigationItem from './NavigationItem'
import earthIcon from '../../../../public/images/earthIcon.svg'
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useSidebarDrawer } from '../../../contexts/SidebarDrawer'
import MobileNav from './MobileNav'

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    xl: true,
  })

  const { isOpen, onOpen, onClose } = useSidebarDrawer()
  const [shouldShowActions, setShouldShowActions] = useState(false)
  const [lastYPos, setLastYPos] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY
      const isScrollingUp = yPos > 30

      setShouldShowActions(isScrollingUp)
    }
    window.addEventListener('scroll', handleScroll, false)

    return () => {
      const yPos = window.scrollY
      const isScrollingBack = yPos < 30
      window.removeEventListener('scroll', handleScroll, false)

      if (isScrollingBack) {
        setShouldShowActions(false)
      }
    }
  }, [lastYPos])

  return (
    <>
      {shouldShowActions ? (
        <>
          <Flex
            zIndex="1000000000"
            as="header"
            w="100%"
            filter={'brightness(0.99)'}
            bgColor={'white'}
            blur="100px"
            opacity={'1'}
            position={isOpen ? 'unset' : 'fixed'}
            h="10vh"
            boxShadow={'xl'}
            transition={'ease-out'}
          >
            <Flex
              w="100%"
              maxW={1400}
              transition="bgColor ease 2000ms"
              alignItems="center"
              h="10vh"
              mx="auto"
              px="6"
              align="center"
            >
              <Flex cursor="pointer" mt="-0.3rem">
                <Link href="/" passHref>
                  <Icon cursor="pointer" as={logoBits} w="auto" h="auto" />
                </Link>
              </Flex>

              {isWideVersion ? (
                <>
                  <Flex
                    ml="7rem"
                    as="nav"
                    maxW="500px"
                    flex="1"
                    justify="space-between"
                  >
                    <NavigationItem label="Legal Design" href="/legaldesign" />
                    <NavigationItem label="Consultoria" href="/consultoria" />
                    <NavigationItem label="Treinamentos" href="/treinamentos" />
                    <NavigationItem label="Cursos" href="/cursos" />
                    <NavigationItem label="Blog" href="/blog" />
                  </Flex>

                  <Flex align="center" ml="auto" maxW="400px">
                    <MotionButton
                      ml="2rem"
                      mr="1rem"
                      color="#fff"
                      w="180px"
                      h="50"
                      bgColor="pink.900"
                      whileTap={{ scale: 1.04 }}
                      whileHover={{ scale: 1.04 }}
                      _focus={{ border: 'none' }}
                      _hover={{
                        bgColor: '#fff',
                        color: 'pink.900',
                        border: '1px solid #CC3366',
                      }}
                    >
                      Contrato automático
                    </MotionButton>
                  </Flex>
                </>
              ) : (
                <>
                  <Flex
                    zIndex="200000"
                    ml="auto"
                    justify="center"
                    align="center"
                  >
                    {!isOpen ? (
                      <>
                        <Flex>
                          <HamburgerIcon
                            ml={['0rem', '2rem']}
                            color="pink.900"
                            onClick={onOpen}
                            boxSize="30px"
                          />
                        </Flex>
                      </>
                    ) : null}
                  </Flex>

                  <Drawer
                    size="full"
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                  >
                    <DrawerOverlay>
                      <DrawerContent bg="pink.900">
                        <DrawerCloseButton
                          color="white"
                          fontSize="1.25rem"
                          mt="6"
                          zIndex="500000"
                          active={{}}
                        />
                        <DrawerHeader mt="7"></DrawerHeader>
                        <DrawerBody>
                          <MobileNav />
                        </DrawerBody>
                      </DrawerContent>
                    </DrawerOverlay>
                  </Drawer>
                </>
              )}
            </Flex>
          </Flex>
        </>
      ) : (
        <Flex
          zIndex="100000"
          as="header"
          w="100%"
          filter={'brightness(1)'}
          bgColor={'transparent'}
          opacity={'0.98'}
          position={isOpen ? 'unset' : 'fixed'}
          h="10vh"
          boxShadow={'none'}
          transition={'background-color ease 2000ms '}
        >
          <Flex
            w="100%"
            maxW={1400}
            transition="bgColor ease 2000ms"
            alignItems="center"
            h="10vh"
            mx="auto"
            px="6"
            align="center"
          >
            <Flex cursor="pointer" mt="-0.3rem">
              <Link href="/" passHref>
                <Icon cursor="pointer" as={logoBits} w="auto" h="auto" />
              </Link>
            </Flex>

            {isWideVersion ? (
              <>
                <Flex
                  ml="7rem"
                  as="nav"
                  maxW="500px"
                  flex="1"
                  justify="space-between"
                >
                  <NavigationItem label="Legal Design" href="/legaldesign" />
                  <NavigationItem label="Consultoria" href="/consultoria" />
                  <NavigationItem label="Treinamentos" href="/treinamentos" />
                  <NavigationItem label="Cursos" href="/cursos" />
                  <NavigationItem label="Blog" href="/blog" />
                </Flex>

                <Flex align="center" ml="auto" maxW="400px">
                  <MotionButton
                    ml="2rem"
                    mr="1rem"
                    color="#fff"
                    w="180px"
                    h="50"
                    bgColor="pink.900"
                    whileTap={{ scale: 1.04 }}
                    whileHover={{ scale: 1.04 }}
                    _focus={{ border: 'none' }}
                    _hover={{
                      bgColor: '#fff',
                      color: 'pink.900',
                      border: '1px solid #CC3366',
                    }}
                  >
                    Contrato automático
                  </MotionButton>
                </Flex>
              </>
            ) : (
              <>
                <Flex zIndex="200000" ml="auto" justify="center" align="center">
                  {!isOpen ? (
                    <>
                      <MotionFlex whileTap={{ scale: 0.8 }}>
                        <HamburgerIcon
                          ml={['0rem', '2rem']}
                          color="pink.900"
                          onClick={onOpen}
                          boxSize="34px"
                        />
                      </MotionFlex>
                    </>
                  ) : null}
                </Flex>

                <Drawer
                  size="full"
                  isOpen={isOpen}
                  placement="left"
                  onClose={onClose}
                >
                  <DrawerOverlay>
                    <DrawerContent bg="pink.900">
                      <DrawerCloseButton
                        color="white"
                        fontSize="1.25rem"
                        mt="6"
                        zIndex="500000"
                        _focus={{
                          border: 'none',
                        }}
                      />
                      <DrawerHeader mt="7"></DrawerHeader>
                      <DrawerBody>
                        <MobileNav />
                      </DrawerBody>
                    </DrawerContent>
                  </DrawerOverlay>
                </Drawer>
              </>
            )}
          </Flex>
        </Flex>
      )}
    </>
  )
}
