import 'date-fns';
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useStyles } from '../styles/useStyles';

export const MailList = () => {
  const classes = useStyles();
  const columns = [
    {
      field: 'from',
      headerName: 'From',
      flex: 1,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'to',
      headerName: 'to',
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        if (params.value.length >= 2) {
          return (
            <>
              <Typography>{params.value[0]}</Typography>
              <Typography>...</Typography>
              <Typography>+{params.value.length - 1}</Typography>
            </>
          );
        } else {
          return <Typography>{params.value[0]}</Typography>;
        }
      },
    },
    {
      field: 'subject',
      headerName: 'Subject',
      flex: 2,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return <Typography>{params.value}</Typography>;
      },
    },
    {
      field: 'attachment',
      headerName: '',
      headerClassName: 'super-app-theme--header',
      flex: 0.5,
      align: 'center',
      renderCell: (params) => {
        if (params.value) {
          return <img src={`images/icon_clip.svg`} width={16} height={16} />;
        } else {
          return <></>;
        }
      },
    },
    {
      field: 'date',
      headerName: 'Date',
      description: 'Date',
      sortable: true,
      flex: 0.5,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        const month_english_list = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'June',
          'July',
          'Aug.',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ];
        const today = new Date();
        const thisYear = today.getFullYear();
        const thisMonth = today.getMonth() + 1;
        const thisDate = today.getDate();

        const mailYear = params.value.getFullYear();
        const mailMonth = params.value.getMonth() + 1;
        const mailDate = params.value.getDate();
        console.log(today);
        if (
          thisYear === mailYear &&
          thisMonth === mailMonth &&
          thisDate === mailDate
        ) {
          return (
            <p>
              {params.value.getHours()}:{params.value.getMinutes()}
            </p>
          );
        } else if (thisYear === mailYear) {
          return (
            <p>
              {month_english_list[params.value.getMonth()]}{' '}
              {params.value.getDate()}
            </p>
          );
        } else {
          return (
            <p>
              {params.value.getFullYear()}/{params.value.getMonth() + 1}/
              {params.value.getDate()}
            </p>
          );
        }
      },
    },
  ];

  const rows = [
    {
      id: 1,
      from: 'aaa@example.com',
      to: ['zzz.zzz@example.com', 'zzz.zzz@example.com'],
      subject: '[ HR-888 ] Notice of official announcement',
      attachment: true,
      date: new Date('2021-04-10T11:34:00'),
    },
  ];
  const ImageLogo = () => {
    return (
      <img
        src="images/logo.png"
        width={117}
        height={124}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: 'auto',
        }}
      />
    );
  };
  return (
    <div
      style={{ display: 'flex', height: '100%' }}
      className={classes.bgheader}
    >
      <div style={{ height: 520, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          className={classes.maillist}
          components={{
            NoRowsOverlay: ImageLogo,
          }}
        />
      </div>{' '}
    </div>
  );
};

export default MailList;
