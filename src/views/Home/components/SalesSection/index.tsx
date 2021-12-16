import React from 'react'
import { Flex, Text, Button, Link } from '@pancakeswap/uikit'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import PurpleWordHeading from '../PurpleWordHeading'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: CompositeImageProps
}

const SalesSection: React.FC<SalesSectionProps> = (props) => {
  const { t } = useTranslation()

  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <PurpleWordHeading text={headingTranslatedText} textAlign="center"/>
          <Text color="textSubtle" mb="24px" textAlign="center" fontSize="36px">
            {bodyTranslatedText}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SalesSection
