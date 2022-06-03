import {useState} from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Link } from "react-router-dom"

import TorchIcon from 'components/icons/TorchIcon'

const pages = [
  {
    txt: 'Data',
    link: '/data/seasons'
  },
  {
    txt: 'Analysis',
    link: '/analysis/castdiversity'
  }
]

function NavBarMUI(props) {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="sticky" sx={{ boxShadow: 'none', backgroundColor: '#f8f9fa', color: '#616162' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={"/"}
            className={'navBarItem'}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
          >
              <TorchIcon sx={{ fontSize: '1.5em', marginRight: '12px' }}/>
              Survivor Stats
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.txt} onClick={handleCloseNavMenu}>
                    <Typography
                      variant="button"
                      component={Link}
                      to={page.link}
                      className={'navBarItem'}
                      sx={{ textAlign: 'center'}}
                    >
                      {page.txt}
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={"/"}
            className={'navBarItem'}
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <TorchIcon sx={{ fontSize: '1.5em', marginRight: '12px' }}/>
            Survivor Stats
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Typography
                  key={page.txt}
                  variant="button"
                  component={Link}
                  to={page.link}
                  className={'navBarItem'}
                  sx={{ my: 2, px: 2, display: 'block' }}
                >
                  {page.txt}
                </Typography>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBarMUI
