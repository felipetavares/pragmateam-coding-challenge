export default function TemperatureTable({table}) {
    const statuses = {
        [+1]: 'too high',
        [-1]: 'too low',
        0: 'all good',
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
            {Object.entries(table).map(([id, product]) => (
                 <tr key={id}>
                     <td>{product.name}</td>
                     <td>{product.temperature}</td>
                     <td>{statuses[Math.min(1, Math.max(-1, product.status))]}</td>
                 </tr>
            ))}
         </tbody>
     </table>
}
