import { useQuery } from "@tanstack/react-query";
import api, { Language } from "../api";

export interface IContact {
    name: string;
    email: string;
    phone_number: string;
    text: string;
}

export const getMainPage = async (language: Language) => {
    const response = await api(language)('/main_page');
    return response.data;
}

export const getPortfolio = async (language: Language) => {
    const response = await api(language)('/portfolio');
    return response.data;
}

export const usePortfolio = (language: Language) => {
    return useQuery({
        queryKey: ['portfolio', language],
        queryFn: () => getPortfolio(language)
    })
}

export const getAddress = async (language: Language) => {
    try {
        const response = await api(language)('/address');
        return response.data;
    } catch (error) {
        console.error('Error fetching address:', error);
        throw error;
    }
}

export const useAddress = (language: Language) => {
    return useQuery({
        queryKey: ['address', language],
        queryFn: () => getAddress(language)
    })
}

export const getServices = async (language: Language) => {
    const response = await api(language)('/service');
    return response.data;
}

export const useServices = (language: Language) => {
    return useQuery({
        queryKey: ['services', language],
        queryFn: () => getServices(language)
    })
}

export const getContact = async (language: Language) => {
    const response = await api(language)('/contact');
    return response.data;
}

export const useContact = (language: Language) => {
    return useQuery({
        queryKey: ['contact', language],
        queryFn: () => getContact(language)
    })
}

export const getPartners = async (language: Language) => {
    const response = await api(language)('/partners');
    return response.data;
}

export const usePartner = (language: Language) => {
    return useQuery({
        queryKey: ['partner', language],
        queryFn: () => getPartners(language)
    })
}
