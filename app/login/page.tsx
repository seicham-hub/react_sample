'use client';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import React from 'react';
import { useEffect, useState } from 'react'
import { useForm, Controller, SubmitHandler } from "react-hook-form"


// import { useQuery, gql } from '@apollo/client';
import { ENDPOINT } from "@/app/constants";
import { ConstructionOutlined } from '@mui/icons-material';

import { gql, useSuspenseQuery, useQuery } from '@apollo/client';
// import sss from '@/app/components/Atoms'


const GET_USERS = gql`
query getAllUser {
    result {
        id
        fullName
        email
        createdAt
        updatedAt
        deletedAt
    }
    userErrors {
        code
        message
    }
}
`;

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                your website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

type Inputs = {
    email: string
    password: string
}

export default function SignIn() {

    const [data1, setData] = useState<any>(null);


    let data, error;
    try {
        ({ data, error } = useQuery(GET_USERS, { errorPolicy: 'all' }));

    } catch (e) {
        console.log(e)
    }

    console.log(data, error)



    // useEffect(() => {

    //     const fechData = async () => {
    //         try {
    //             const response = await fetch(ENDPOINT, {
    //                 cache: 'no-store',
    //                 next: { revalidate: 10 },
    //             });
    //             const result = await response.json();
    //             setData(result);
    //             console.log("resultです", result);
    //         } catch (error) {
    //             console.error('Error fetching data', error);
    //         }
    //     }
    //     fechData();
    // }, [])

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };
    // const { loading, error, data } = useQuery(GET_USERS);
    // if (loading) {
    //     return <div>読み込み中</div>;
    // }

    // console.log("loading", loading)
    // console.log("error", error)
    // console.log("data", data)


    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                    <Controller
                        name="email"
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_\+\-]+(.[a-zA-Z0-9_\+\-]+)*@([a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                                message: 'Invalid email format'
                            }
                        }}
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                // bool値に強制変換
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Password is required' }}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />

                        )}

                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container >
    );
}