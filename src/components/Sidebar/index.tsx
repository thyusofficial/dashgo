import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()
  const isFloatingSidebar = useBreakpointValue({
    base: true,
    lg: false
  })
  if (isFloatingSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent background="gray.800" padding="4">
            <DrawerCloseButton marginTop="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" width="64" marginRight="8">
      <SidebarNav />
    </Box>
  )
}