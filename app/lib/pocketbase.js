import PocketBase from 'pocketbase';

const pocketbase = new PocketBase(process.env.DATABASE);

export default pocketbase;