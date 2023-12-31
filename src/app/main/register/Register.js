import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';

import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import FirebaseRegisterTab from './tabs/FirebaseRegisterTab';

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
      theme.palette.primary.dark,
      0.5
    )} 100%)`,
    color: theme.palette.primary.contrastText,
    width: theme.breakpoints.width
  },
  leftSection: {},
  auth_inputs: {
    width: '70%'
  },
  rightSection: {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
      theme.palette.primary.dark,
      0.5
    )} 100%)`,
    color: theme.palette.primary.contrastText
  }
}));

function Register() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
    <div className={clsx(classes.root, 'flex flex-col flex-auto items-center  flex-shrink-1')} width="100%">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-full shadow-2xl overflow-hidden "
        style={{ height: '100%' }}
      >
        <Card
          className={clsx(classes.leftSection, 'flex flex-col w-full max-w-sm items-center justify-evenly shadow-0')}
          square
          width="100%"
        >
          {/* <CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320"> */}
          <CardContent className="flex flex-col items-center justify-center w-full max-w-320">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
              <div className="flex items-center justify-center  mt-72">
                <img
                  className="logo-icon mr-6"
                  width={90}
                  src="https://media.licdn.com/dms/image/D560BAQFlXFQ3alWjGg/company-logo_200_200/0/1666766538054?e=1703116800&v=beta&t=H0KF38Ovts0__sTx4dg9TfWPg8UeaLvj8ItQOYyP1h4"
                  alt="logo"
                />
                <div>
                  <Typography className="text-24 font-medium logo-text" color="inherit">
                    Cargo Fleet
                  </Typography>
                </div>
              </div>
            </motion.div>

            {/* {selectedTab === 0 && <JWTRegisterTab />}
            {selectedTab === 1 && <FirebaseRegisterTab />}
            {selectedTab === 2 && <Auth0RegisterTab />} */}
          </CardContent>
          <div className={classes.auth_inputs}>
            <FirebaseRegisterTab />
          </div>

          <div className="flex flex-col items-center justify-center pb-32">
            <div>
              <span className="font-normal mr-8">Already have an account?</span>
              <Link className="font-normal" to="/login">
                Login
              </Link>
            </div>
            <Link className="font-normal mt-8" to="/">
              Back to Dashboard
            </Link>
          </div>
        </Card>

        <div className={clsx(classes.rightSection, 'hidden md:flex flex-1 items-center justify-center p-64')}>
          <div className="max-w-320">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}>
              <Typography variant="h3" color="inherit" className="font-semibold leading-tight">
                Welcome <br />
                to the <br /> Cargo Fleet!
              </Typography>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
              <Typography variant="subtitle1" color="inherit" className="mt-32">
                A FMS designed to help businesses and organizations manage and monitor their vehicle fleets efficiently.
              </Typography>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
