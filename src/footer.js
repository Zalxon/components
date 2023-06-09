import React from 'react'
import { Box, Grid, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Monogram from './monogram'
import Row from './row'
import Column from './column'

const Footer = () => {
  return (
    <Box
      sx={{
        mt: [7, 7, 7, 8],
        mb: [7, 7, 7, 8],
        pb: [2, 1, 0, 0],
      }}
    >
      <Row sx={{ mb: [0, 0, 4, 5] }}>
        <Column start={[1, 2]} width={[3, 3]}>
          <Box>
            <Box
              sx={{
                fontSize: [2, 2, 2, 3],
                fontFamily: 'heading',
                letterSpacing: 'mono',
                mb: [2],
              }}
            >
              EMAIL
            </Box>
            <Link
              href='mailto:hello@zalxon.com'
              sx={{
                textDecoration: 'none',
                fontSize: [2, 2, 2, 3],
              }}
            >
              hello@zalxon.com
            </Link>
          </Box>
        </Column>
        <Column
          start={[5]}
          width={[1]}
          dl={1}
          dr={1}
          sx={{
            display: ['flex', 'none', 'none', 'none'],
            justifyContent: ['center'],
          }}
        >
          <Monogram sx={{ mt: ['-4px'], width: '60px', height: '60px' }} />
        </Column>
        <Column start={[1, 5, 5, 5]} width={[3, 3]} sx={{ mt: [3, 0, 0, 0] }}>
          <Box>
            <Box
              sx={{
                fontSize: [2, 2, 2, 3],
                fontFamily: 'heading',
                letterSpacing: 'mono',
                mb: [2],
              }}
            >
              FOLLOW
            </Box>
            <Link
              href='https://twitter.com/zalxon'
              sx={{
                textDecoration: 'none',
                fontSize: [2, 2, 2, 3],
              }}
            >
              @zalxon
            </Link>
          </Box>
        </Column>
        <Column
          start={[1, 9]}
          width={[5, 4, 3, 3]}
          sx={{ mt: ['42px', '42px', 0, 0], mb: [3, 3, 0, 0] }}
        >
          <Box>
            <Box
              sx={{
                fontSize: [2, 2, 2, 3],
                fontFamily: 'body',
                color: 'secondary',
              }}
            >
              Zalxon is a cutting-edge project aimed at improving the health and well-being of individuals by leveraging the power of artificial intelligence and data analysis.
            </Box>
          </Box>
        </Column>
      </Row>
      <Row sx={{ mb: ['2px'], mt: [5, 5, 4] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[3, 2, 3, 3]}
          sx={{
            display: 'flex',
            alignItems: ['flex-start', 'flex-start', 'flex-end'],
          }}
        >
          <Box
            sx={{
              bottom: '0px',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              pt: [2],
            }}
          >
            <Box
              sx={{
                color: 'secondary',
                fontSize: [1, 1, 1, 2],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              (c) {new Date().getFullYear()} Zalxon
            </Box>
          </Box>
        </Column>
        <Column
          start={[4, 3, 5, 5]}
          width={[2, 2, 3, 3]}
          sx={{
            display: 'flex',
            alignItems: ['flex-start', 'flex-start', 'flex-end'],
            mt: [0, 0, 0, 0],
          }}
        >
          <Box
            sx={{
              bottom: '0px',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              width: ['100%', 'auto', 'auto', 'auto'],
              pt: [2],
            }}
          >
            <NextLink href='/terms' passHref>
              <Box
                as='a'
                sx={{
                  textDecoration: 'none',
                  fontSize: [1, 1, 1, 2],
                  color: 'secondary',
                  fontFamily: 'mono',
                  letterSpacing: 'mono',
                  display: 'block',
                }}
              >
                READ OUR TERMS
              </Box>
            </NextLink>
          </Box>
        </Column>
        <Column
          start={[5, 7, 9, 9]}
          width={[2, 3, 3, 3]}
          sx={{ display: ['none', 'initial', 'initial', 'initial'] }}
        >
          <Monogram
            sx={{
              width: 50,
              height: 50,
              mt: [0, '-10px', 4, 5],
              mb: ['-12px'],
            }}
          />
        </Column>
      </Row>
    </Box>
  )
}

export default Footer
