<template>
    <section>
        <div class="uk-container mx-auto mt-8 px-4">
            <div class="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">Gestion des locataires</h1>
                <button class="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Ajouter un locataire
                </button>
            </div>

            <div class="bg-white shadow-md rounded-lg overflow-x-auto">
                <!-- table de locataire -->
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appartement</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Date d'entrée</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Statut du loyer</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        
                        <tr>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="">
                                    
                                    <div class="ml-0 sm:ml-4">
                                        <div class="text-sm font-medium text-gray-900">Moudiki Lionel</div>
                                        <div class="text-sm text-gray-500 hidden sm:block">lmoudiki@email.com</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Apt. 3</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                                <div class="text-sm text-gray-900">01/03/2023</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    À jour
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3">Éditer</a>
                                <a href="#" class="text-red-600 hover:text-red-900">Supprimer</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

           
        </div>
    </section>
</template>