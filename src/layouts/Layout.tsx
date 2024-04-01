import { AppShell, Burger, Button, Flex, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { FC } from "react";
import {FaSun, FaMoon} from 'react-icons/fa'

interface Props {
    children: React.ReactNode;
    setPage: (index: number) => void
}

export const Layout: FC<Props> = ({children, setPage}) => {
    const [opened, {toggle}] = useDisclosure();

    const {setColorScheme} = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');
    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme ===  'dark' ? 'light' : 'dark')
      }

    return <AppShell
    header={{height:"60"}}
    navbar={{width:300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
    padding="md"
  >
    <AppShell.Header>
      <Flex justify="space-between" align="center" style={{padding: '10px 20px'}}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
        <div>Quirky Mantine Tutorial</div>
        <Button size="sm" variant="link" onClick={toggleColorScheme}>
          {computedColorScheme === 'dark' ? <FaSun/> : <FaMoon/>}
         </Button>
      </Flex>
    </AppShell.Header>
  <AppShell.Navbar>
    <Button onClick={()=> setPage(0)} style={{margin:'5px'}}>TextComponent</Button>
    <Button onClick={()=> setPage(1)} style={{margin:'5px'}}>ButtonComponent</Button>
  </AppShell.Navbar>
  <AppShell.Main>
    {/* {currentComponent === "component1" ? <TextComponent/> : <ButtonComponent/>} */}
    {children}
  </AppShell.Main>
  <AppShell.Footer zIndex={opened ? 'auto' : 201}>
    Hello everyone😁😁😁😁
  </AppShell.Footer>

  </AppShell>
}