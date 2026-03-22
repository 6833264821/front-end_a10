'use client'

import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

type DateReserveProps = {
  onDateChange?: (date: string) => void;
};

export default function DateReserve({ onDateChange }: DateReserveProps) {
  const [value, setValue] = useState<Dayjs | null>(dayjs())

  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue)
    if (newValue && onDateChange) {
      onDateChange(newValue.format('YYYY/MM/DD'))
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={value} onChange={handleDateChange} />
    </LocalizationProvider>
  )
}