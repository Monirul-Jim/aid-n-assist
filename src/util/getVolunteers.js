
import { getVolunteersFromDb } from '@/services/volunteer.service';
import {cache} from 'react'
import 'server-only'

const getVolunteers = cache( () => {
    return getVolunteersFromDb();
});

export default getVolunteers;