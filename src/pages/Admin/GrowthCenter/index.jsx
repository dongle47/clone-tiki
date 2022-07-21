import * as React from "react";
import "./GrowthCenter.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

function GrowthCenter() {
    const [value, setValue] = React.useState([null, null]);
    return(
        <Box>
            <Stack>
                <Typography>Hiệu quả kinh doanh</Typography>
                <Stack direction="row">
                    <Typography>Thời gian báo cáo:</Typography>
                    <Button variant="outlined">Hôm nay</Button>
                    <Button variant="outlined">7 ngày qua</Button>
                    <Button variant="outlined">30 ngày qua</Button>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>
                    <Typography>(Lần cập nhật cuối: 18/06/2022. 11:00)</Typography>
                </Stack>
            </Stack>
            
        </Box>

    )
}

export default GrowthCenter