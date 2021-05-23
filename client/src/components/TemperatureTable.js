export default function TemperatureTable({table}) {
    const statuses = {
        [+1]: 'too high',
        [-1]: 'too low',
        [0]: 'all good',
    };

     return <table>
         <thead>
             <tr>
                 <th align="left">Product</th>
                 <th align="left">Temperature</th>
                 <th align="left">Status</th>
             </tr>
         </thead>

         <tbody>
            {Object.keys(table).map(id => (
                 <tr key={id}>
                     <td>{table[id].name}</td>
                     <td>{table[id].temperature}</td>
                     <td>{statuses[table[id].status]}</td>
                 </tr>
            ))}
         </tbody>
     </table>
}
