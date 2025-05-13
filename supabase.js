import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const url = 'https://abilltuvqjzocqmohbby.supabase.co';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaWxsdHV2cWp6b2NxbW9oYmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MjQ3MzMsImV4cCI6MjA2MjQwMDczM30.ylQAX4HWOnb4eIluohOZ4fSAOfYjt0wh96P5_c23bmE';
const supabase = createClient(url, apiKey);

                    export async function fetchPerson(name, license)
                    {
                        let info = supabase.from('people').select('*');

            
                        
                        if(name)
                        {
                            info = info.ilike('Name', `%${name}%`);
                        }
                        else if(license)
                        {
                            info = info.eq('LicenseNumber',license);
                        }
                        
                        

                        const {data, error} = await info;

                        if(error)
                        {
                            
                            throw error;
                        }
                        return data;
                    }

                    export async function fetchVehicle(rego)
                    {
                        let info = supabase.from('vehicles').select('*');

            
                        
                        info = info.ilike('VehicleID', `%${rego}%`);
                        
                        

                        const {data, error} = await info;

                        if(error)
                        {
                            
                            throw error;
                        }
                        return data;
                    }

                    export async function searchPerson(ownerName)
                    {
                        let info = supabase.from('people').select('*');

        
                            info = info.ilike('Name', `%${ownerName}%`);
                        

                        
                        

                        const {data, error} = await info;

                        if(error)
                        {
                            
                            throw error;
                        }
                        return data;
                    }

                    export async function newOwnerSupabase(name,address,dob,license,expire)
                    {
                    

                        if(name === '' || address ==='' || dob === '' || license ==='' || expire === '')
                        {
                            
                            document.getElementById('message-owner').textContent = `Error`
                        }

                        const {data: check, error: alreadyExists} = await supabase.from('people').select('*')
                            .eq('Name',name)
                            .eq('Address',address)
                            .eq('DOB',dob)
                            .eq('LicenseNumber',license)
                            .eq('ExpiryDate',expire);

                            if(alreadyExists)
                            {
                                
                                throw alreadyExists;
                                
                            }

                            if(check.length > 0)
                            {
                                document.getElementById('message-owner').textContent = `Error`
                            }
                            
                        
                        const {data, error} = await supabase.from('people').insert
                        ([
                            {
                                Name : name,
                                Address: address,
                                DOB: dob,
                                LicenseNumber: license,
                                ExpiryDate: expire
                            }
                        ]);

                        if(error)
                        {
                            
                            throw error;
                        }

                        document.getElementById('message-owner').textContent = `Owner added successfully`
                    }
