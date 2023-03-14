import {
  useState,
  MouseEvent
} from "react"

import { 
  useNavigate 
} from "react-router-dom"

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  InputBase
} from "@mui/material"

import {
  Menu as IconMenu,
  Search as IconSearch,
  AccountCircle as IconAccountCircle,
  Brightness7 as IconBrightness7,
  Brightness4 as IconBrightness4
} from "@mui/icons-material"

import { 
  styled, 
  alpha,
  useTheme
} from "@mui/material/styles"

import { 
  useAuth,
  useSetting
} from "contexts"

import {
  faker
} from "@faker-js/faker"

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  boxShadow: theme.shadows[2],
  borderRadius: '50px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function Navbar() {
  const { user } = useAuth()
  const { themeMode, onToggleMode } = useSetting()
  const { brand } = useTheme()
  const navigate = useNavigate()
  const isLight = themeMode === 'light'

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleUserSignIn = () => {
    navigate('/sign-in')
  }

  return (
    <AppBar position="sticky" color="grey" sx={{ pl: { md: 3 }, pr: { xs: 1, md: 3 } }} >
      <Toolbar disableGutters>
        <Avatar
          alt="branch logo" 
          src={ brand.logo } 
          width={52}
          height={52}
          sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            mr: 1,
          }}
          loading="lazy"
          />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href={ brand.href }
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            textTransform: 'uppercase'
          }}
        >
          { brand.name }
        </Typography>

        <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none' } 
          }}
          >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={ handleOpenNavMenu }
            color="inherit"
            >
            <IconMenu />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={ anchorElNav }
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={ Boolean(anchorElNav) }
            onClose={ handleCloseNavMenu }
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
            >
            {
              pages.map((page) => (
                <MenuItem 
                  key={ page } 
                  onClick={ handleCloseNavMenu } 
                  >
                  <Typography 
                    textAlign="center"
                    >
                    { page }
                  </Typography>
                </MenuItem>
              ))
            }
          </Menu>
        </Box>
        <Avatar
          alt="branch logo" 
          src={ brand.logo } 
          width={52}
          height={52}
          sx={{ 
            display: { xs: 'flex', md: 'none' }, 
            mr: 1,
          }}
          loading="lazy"
          />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href={ brand.href }
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            textTransform: 'uppercase'
          }}
          >
          { brand.name }
        </Typography>
        <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' } 
          }}
          >
          {
            pages.map((page) => (
              <Button
                key={ page }
                onClick={ handleCloseNavMenu }
                sx={{ 
                  my: 2, 
                  // color: 'white', 
                  display: 'block',
                  textTransform: 'uppercase'
                }}
                >
                {page}
              </Button>
            ))
          }
        </Box>

        <Box 
          sx={{ 
            flexGrow: 0,
            display: 'flex',
          }}
          >
          <Search 
            sx={{ 
              display: { xs: 'none', md:'block' }
            }}
            >
            <SearchIconWrapper>
              <IconSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 
                'aria-label': 'search' 
              }}
            />
          </Search>
          <Tooltip 
            title={
              isLight 
              ? "Change to dark mode"
              : "Change to light mode"
            }
            >
            <IconButton 
              onClick={ onToggleMode } 
              sx={{ 
                p: 0,
                ml: 2
              }}
              >
              {
                isLight
                ? <IconBrightness7 />
                : <IconBrightness4 />
              }
            </IconButton>
          </Tooltip>
          {
            !user || !user.token || user.token === "" 
            ? (
              <Tooltip 
                title="Sign In"
                >
                <IconButton 
                  onClick={ handleUserSignIn } 
                  sx={{ 
                    p: 0,
                    ml: 2
                  }}
                  >
                  <IconAccountCircle />
                </IconButton>
              </Tooltip>
            )
            : (
              <>
                <Tooltip 
                  title="Open settings"
                  >
                  <IconButton 
                    onClick={ handleOpenUserMenu } 
                    sx={{ 
                      p: 0,
                      ml: 2
                    }}
                    >
                    <Avatar 
                      alt="user avatar" 
                      src={ faker.image.avatar() } 
                      />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ 
                    mt: '45px' 
                  }}
                  id="menu-appbar"
                  anchorEl={ anchorElUser }
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={ Boolean(anchorElUser) }
                  onClose={ handleCloseUserMenu }
                  >
                  {
                    settings.map((setting) => (
                      <MenuItem 
                        key={ setting } 
                        onClick={ handleCloseUserMenu }
                        >
                        <Typography 
                          textAlign="center"
                          >
                        { setting }
                        </Typography>
                      </MenuItem>
                    ))
                  }
                </Menu>
              </>
            )
          }
        </Box>
      </Toolbar>
    </AppBar>
  )
}