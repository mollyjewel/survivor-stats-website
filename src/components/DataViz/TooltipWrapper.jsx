import Box from '@mui/material/Box'

export default function TooltipWrapper(props) {
  return (
    <Box
      className={"tooltipBox"}
      sx={{
        background: 'white',
        color: 'inherit',
        fontSize: 'inherit',
        borderRadius: '2px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 2px',
        padding: '5px 9px'
      }}
    >
      <Box
        className={"tooltipContent"}
        sx={{
          whiteSpace: 'pre',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
} 
