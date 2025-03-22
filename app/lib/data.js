'use server';
import pocketbase from './pocketbase';

export async function getFish() {
  try {
    const res = await pocketbase.collection("fish").getFullList({
      sort: 'name' //alphatbetical order by name
    });
    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getFishById(id) {
  try {
    const res = await pocketbase.collection("fish").getOne(id);
    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
}