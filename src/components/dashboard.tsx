"use client"

import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, Button, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import { makeStyles } from "@material-ui/core/styles";

const useStyles: any = makeStyles((theme) => {
    container: {
        backgroundColor: theme.palette.background.paper
        // marginRight: '20px'
        // padding: theme.spacing(8,0,6    )
    }
})

const cards = [1, 2, 3, 4, 5, 6];

const Dashboard = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm" style={{ marginTop: '100px' }} className={classes.container}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            This is typography
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone this is just dummy terxt to check the typography. This isthe text just to extend the number of line to increaser and check the text condityions.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See This
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                <Container maxWidth="md">
                    <Grid container spacing={4}>
                        <div>
                            {
                                cards.map((card) => {
                                    return (
                                        <Grid item key={card}  md={6}  lg={2}>
                                            <Card>
                                                <CardMedia image="" title="" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5">Hi </Typography>
                                                    <Typography>
                                                        This is a card element to see typography.
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" color="primary">VIEW</Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                </Container>
            </main>

        </>
    )
}

export default Dashboard;