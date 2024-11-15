import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api";
import axios from "axios";

export interface IContact {
    name: string;
    email: string;
    phone_number: string;
    text: string;
}

export const getMainPage = async () => {
    const response = await api.get('/main_page');
    return response.data;
}

export const getPortfolio = async () => {
    const response = await api.get('/portfolio');
    console.log(response.data)
    return response.data;
}

export const usePortfolio = () => {
   return useQuery({
    queryKey: ['portfolio'],
    queryFn: getPortfolio
   })
}

export const getAddress = async () => {
    const response = await api.get('/address');
    return response.data;
}

export const useAddress = () => {
    return useQuery({
        queryKey: ['address'],
        queryFn: getAddress
    })
}
