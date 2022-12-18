import { CERTIFICATESNUCAMP } from '../app/shared/CERTIFICATESNUCAMP';

export const selectCertificatesBySchoolId = () => {
    return CERTIFICATESNUCAMP; //currently this returns all certificates, but i'll need to change this to select via school
        
};
export const selectCertificatesBySchoolIdReal = (schoolid) => {
    return CERTIFICATESNUCAMP.filter((certificate) => certificate.schoolId === schoolid); //currently this returns all certificates, but i'll need to change this to select via school
        
};