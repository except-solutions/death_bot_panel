import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode);
    return (
        {
            root: {
                background: `${colors.primary.DEFAULT} !important`,
                borderBottom: `1px solid ${colors.borderColor}`,
                boxShadow: 'none !important'
            },
            toolbar: {
                justifyContent: 'space-between',
                padding: '25px 45px'
            },
            menuIcon: {
                marginRight: '10px',
                cursor: 'pointer'
            },
            iconBlock: {
                paddingRight: '37px', 
                paddingTop: '10px',
                borderRight: `1px solid ${colors.borderColor}`
            },
            themeIcon: {
                marginRight: '45px'
            },
            searchBlock: {
                display: 'flex',
                borderRadius: '8px',
                marginLeft: '28px',
                backgroundColor: `${colors.primary[600]}`,
                maxHeight: '45px'
        
            },
            searchIcon: {
                '&:hover': {
                    backgroundColor: "transparent !important",
                }
            },
            searchInput: {
                padding: '18px 12px' 
            }
        }
    )
})