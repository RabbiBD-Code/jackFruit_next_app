'use client'

import { UpdateProfile } from '@/componets/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React, { use } from 'react';

const ProfilePage = () => {
    const dataUser = authClient.useSession();
    const user = dataUser.data?.user;
    // console.log(user);
    return (
        <Card className='w-8/12 mx-auto flex flex-col items-center border mt-5'>
            <Avatar className='h-30 w-30'>
                <Avatar.Image alt="John Doe" src={user?.
                    image}
                    referrerPolicy='no-referrer' />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <h2 className='text-xl font-bold'>{user?.name}</h2>
            <p className='text-muted'>{user?.email}</p>
            <UpdateProfile />
        </Card>
    );
};

export default ProfilePage;