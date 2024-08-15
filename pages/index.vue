<template>
    
    <section>
        <div class=" uk-container mt-8">
            <h1 class="text-3xl font-bold mb-6">Tableau de bord</h1>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Appercu des appartement-->
                    <div class="bg-white p-6 rounded-lg shadow">
                        <h2 class="text-xl font-semibold mb-4">Aperçu des appartements</h2>
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="bg-green-100 p-4 rounded-md">
                                <p class="text-2xl font-bold text-green-700">8</p>
                                <p class="text-sm text-green-600">Occupés</p>
                            </div>
                            <div class="bg-red-100 p-4 rounded-md">
                                <p class="text-2xl font-bold text-red-700">2</p>
                                <p class="text-sm text-red-600">Vacants</p>
                            </div>
                        </div>
                    
                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <span class="text-sm font-medium">Taux d'occupation</span>
                                <span class="text-sm font-bold text-green-600">80%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-green-600 h-2.5 rounded-full" style="width: 80%"></div>
                            </div>
                        </div>
                    
                        <div class="mt-4">
                            <h3 class="text-lg font-semibold mb-2">Statut rapide</h3>
                            <ul class="space-y-2">
                                <li class="flex justify-between items-center">
                                    <span class="text-sm">Loyers en retard</span>
                                    <span class="text-sm font-bold text-yellow-600">1</span>
                                </li>
                                <li class="flex justify-between items-center">
                                    <span class="text-sm">Maintenance requise</span>
                                    <span class="text-sm font-bold text-orange-600">2</span>
                                </li>
                                
                            </ul>
                        </div>
                    
                        <div class="mt-4">
                            <a href="#" class="text-blue-600 hover:underline text-sm">Voir tous les détails</a>
                        </div>
                    </div>

                    <!-- paiements en retard  -->
                    <div class="bg-white p-6 rounded-lg shadow">
                        <h2 class="text-xl font-semibold mb-4">Paiements en retard</h2>
                        
                        <div class="mb-4">
                            <p class="text-3xl font-bold text-red-600">3</p>
                            <p class="text-sm text-gray-600">Paiements en retard ce mois-ci</p>
                        </div>
                    
                        <ul class="space-y-4">
                            <li class="border-l-4 border-red-500 pl-4">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <p class="font-semibold">Apt. 3 - M. Moudiki</p>
                                        <p class="text-sm text-gray-600">Retard de 15 jours</p>
                                    </div>
                                    <div class="text-right">
                                        <p class="font-bold text-red-600">18,000 FCFA</p>
                                        <p class="text-xs text-gray-500">Échéance: 01/08/2024</p>
                                    </div>
                                </div>
                            </li>
                            <li class="border-l-4 border-orange-500 pl-4">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <p class="font-semibold">Apt. 7 - Mme Ellice</p>
                                        <p class="text-sm text-gray-600">Retard de 5 jours</p>
                                    </div>
                                    <div class="text-right">
                                        <p class="font-bold text-orange-600">20,000 FCFA</p>
                                        <p class="text-xs text-gray-500">Échéance: 10/08/2024</p>
                                    </div>
                                </div>
                            </li>
                            <li class="border-l-4 border-yellow-500 pl-4">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <p class="font-semibold">Apt. 9 - M. Francis</p>
                                        <p class="text-sm text-gray-600">Retard de 2 jours</p>
                                    </div>
                                    <div class="text-right">
                                        <p class="font-bold text-yellow-600">15,000 FCFA</p>
                                        <p class="text-xs text-gray-500">Échéance: 13/08/2024</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    
                        <div class="mt-6">
                            <a href="#" class="text-blue-600 hover:underline text-sm">Voir tous les paiements en retard</a>
                        </div>
                    </div>

                    <!-- entretiens prévus -->
                    <div class="bg-white p-6 rounded-lg shadow">
                        <h2 class="text-xl font-semibold mb-4">Entretiens à venir</h2>
                        
                        <div class="mb-4">
                            <p class="text-3xl font-bold text-blue-600">4</p>
                            <p class="text-sm text-gray-600">Entretiens prévus ce mois-ci</p>
                        </div>
                    
                        <ul class="space-y-4">
                           
                            <li class="bg-blue-50 p-4 rounded-md">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <p class="font-semibold">Apt. 5 - Électricité</p>
                                        <p class="text-sm text-gray-600">Mise aux normes tableau électrique</p>
                                       
                                    </div>
                                    <div class="text-right">
                                        <p class="text-sm font-bold text-blue-600">22/08/2024</p>
                                        
                                    </div>
                                </div>
                            </li>
                            <li class="bg-blue-50 p-4 rounded-md">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <p class="font-semibold">Apt. 8 - Peinture</p>
                                        <p class="text-sm text-gray-600">Rafraîchissement salon et chambre</p>
                                       
                                    </div>
                                    <div class="text-right">
                                        <p class="text-sm font-bold text-blue-600">25/08/2024</p>
                                       
                                    </div>
                                </div>
                            </li>
                        </ul>
                    
                        <div class="mt-6 flex justify-between items-center">
                            <a href="#" class="text-blue-600 hover:underline text-sm">Voir tous les entretiens</a>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition duration-300">
                                Planifier un entretien
                            </button>
                        </div>
                    </div>
                </div>         
        </div>
    
    </section>

   

</template>