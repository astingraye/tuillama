import React, { useEffect, useState } from 'react';
import { render, Text, Box } from 'ink';
import chalk from 'chalk';

export function Tab({tabName, selected}) {
    console.log(chalk.white());
    return (
        <Box>
            <Text {...selected ? {backgroundColor: "black", color: "white"} : {}}>{tabName}</Text>
        </Box>
    )
}