import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const url = 'https://abilltuvqjzocqmohbby.supabase.co';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaWxsdHV2cWp6b2NxbW9oYmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MjQ3MzMsImV4cCI6MjA2MjQwMDczM30.ylQAX4HWOnb4eIluohOZ4fSAOfYjt0wh96P5_c23bmE';
const supabase = createClient(url, apiKey);

                    export async function fetchPerson(name)
                    {
                        const {data, error} = await supabase.from('people').select('PersonID').eq('Name', `%${name}%`);
                        
                        if(error)
                        {
                            console.error('Supabase error:', error);
                            throw error;
                        }
                        return data;
                    }
