import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { FetchFromAPI } from '../utils/FetchFromAPI.js';
import DisplayCard from './DisplayCard.jsx';

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await FetchFromAPI(''); // Empty string for top movies endpoint
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#DAA520' }}>
        Top Movies
      </Typography>
      
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Stack 
          sx={{ display: "flex", flexDirection: { sm: "column", md: "row" } }} 
          flexWrap="wrap" 
          justifyContent="start" 
          gap={2}
        >
          {Array.isArray(movies) && movies.map((movie) => (
            <Box
              key={`movies-${movie.id}-${movie.title}`}
              sx={{ 
                boxShadow: 'none', 
                borderRadius: '10px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '10px' 
              }}
            >
              <DisplayCard details={movie} />
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default TopMovies;