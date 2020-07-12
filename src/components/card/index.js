import React from "react"
import { Flex, Box, Text, Card as RebassCard } from "rebass"
import styled from "@emotion/styled"

import Badge from "../badge"
import Dropdown from "../dropdown"
import Cta from "../cta"
import Typography from "../typography"
import Spinner from "../spinner"

const Card = styled(RebassCard)`
  ${Typography.Base}
  box-shadow:
    0 7px 13px 0 rgba(60,66,87,.03),
    0 3px 6px 0 rgba(0,0,0,.08);
  border-radius: 2px;
  height: 100%;
`

const StyledFooter = styled(Flex)`
  border-top: 1px solid #e3e8ee;
`

const StyledHeader = styled(Flex)`
  border-bottom: 1px solid #e3e8ee;
`

Card.Header = ({ children, badge, dropdownOptions, action, ...rest }) => {
  return (
    <StyledHeader alignItems="center" {...rest}>
      <Text p={3} flexGrow="1" fontWeight="bold">
        {children}
        {!!badge && (
          <Badge ml={3} color="#4f566b" bg="#e3e8ee">
            {badge.label}
          </Badge>
        )}
      </Text>
      {!!action &&
        (action.isLoading ? (
          <Box m={1} height="20px" width="20px">
            <Spinner dark={true} />
          </Box>
        ) : (
          <Cta onClick={action.onClick} mr={3} variant={action.type || "cta"}>
            {action.label}
          </Cta>
        ))}
      {dropdownOptions && dropdownOptions.length > 0 && (
        <Dropdown mr={3}>
          {dropdownOptions.map(o => (
            <Text color={o.variant} onClick={o.onClick}>
              {o.label}
            </Text>
          ))}
        </Dropdown>
      )}
    </StyledHeader>
  )
}

Card.VerticalDivider = styled(Box)`
  box-shadow: inset -1px 0 #e3e8ee;
  width: 1px;
`

Card.Footer = ({ children, ...rest }) => (
  <StyledFooter py={3} {...rest}>
    {children}
  </StyledFooter>
)

Card.Body = ({ children, ...rest }) => (
  <Flex py={3} {...rest}>
    {children}
  </Flex>
)

export default Card
