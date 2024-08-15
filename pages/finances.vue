<template>
    <div class=" uk-container mx-auto mt-8 px-4">
        <h1 class="text-3xl font-bold mb-6">Suivi Financier</h1>

        <div class="mb-4">
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <li class="mr-2">
                    <a href="#" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg no-underline " >Loyers</a>
                </li>
                
            </ul>
        </div>

        <!-- Contenu de l'onglet Loyers -->
        <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-xl font-semibold mb-4">Enregistrement des Loyers</h2>
            
            <!-- Formulaire d'enregistrement de loyer -->
            <form class="mb-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="apartment" class="block text-sm font-medium text-gray-700">Appartement</label>
                        <select id="apartment" name="apartment" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Appartement 1</option>
                            <option>Appartement 2</option>
                            <option>Appartement 3</option>
                            <option>Appartement 4</option>
                            <option>Appartement 5</option>
                            <option>Appartement 6</option>
                            <option>Appartement 7</option>
                            <option>Appartement 8</option>
                            <option>Appartement 9</option>
                            <option>Appartement 10</option>
                          
                        </select>
                    </div>
                    <div>
                        <label for="month" class="block text-sm font-medium text-gray-700">Mois</label>
                        <input type="month" id="month" name="month" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    </div>
                    <div>
                        <label for="amount" class="block text-sm font-medium text-gray-700">Montant</label>
                        <input type="number" id="amount" name="amount" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="0.00">
                    </div>
                    <div>
                        <label for="status" class="block text-sm font-medium text-gray-700">Statut</label>
                        <select id="status" name="status" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Payé</option>
                            <option>En attente</option>
                            <option>En retard</option>
                        </select>
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit" class="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Enregistrer le loyer
                    </button>
                </div>
            </form>

            <!-- Tableau des derniers loyers enregistrés -->
            <h3 class="text-lg font-semibold mb-2">Derniers loyers enregistrés</h3>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appartement</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mois</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">Appartement 1</td>
                            <td class="px-6 py-4 whitespace-nowrap">Août 2024</td>
                            <td class="px-6 py-4 whitespace-nowrap">15,000 FCFA</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Payé
                                </span>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>