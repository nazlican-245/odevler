import React from 'react';
const { default: axios } = require("axios");

async function getVeri(n) {

    const users = async (n) => {
        const { veri } = await axios("https://jsonplaceholder.typicode.com/users/" + n);
        console.log(veri);
}


    const post = async (n) => {
        const { veri1 } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + n);
        console.log(veri1);
    }
const userOfId = await users(n)
const userOfPost = await post(n)
return userOfId + userOfPost
}


export default getVeri;
